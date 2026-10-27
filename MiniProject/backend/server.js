require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/animetracker';

// Middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

// ─── Mongoose Model ────────────────────────────────────────────────────────────

const animeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: [200, 'Title must be 200 characters or fewer'],
    },
    genre: {
      type: String,
      required: [true, 'Genre is required'],
      trim: true,
      maxlength: [100, 'Genre must be 100 characters or fewer'],
    },
    totalEpisodes: {
      type: Number,
      required: [true, 'Total episodes is required'],
      min: [1, 'Total episodes must be at least 1'],
      validate: {
        validator: Number.isInteger,
        message: 'Total episodes must be a whole number',
      },
    },
    watchedEpisodes: {
      type: Number,
      default: 0,
      min: [0, 'Watched episodes cannot be negative'],
      validate: {
        validator: Number.isInteger,
        message: 'Watched episodes must be a whole number',
      },
    },
    rating: {
      type: Number,
      min: [0, 'Rating must be between 0 and 10'],
      max: [10, 'Rating must be between 0 and 10'],
      default: null,
    },
    status: {
      type: String,
      required: [true, 'Status is required'],
      enum: {
        values: ['Plan to Watch', 'Watching', 'Completed', 'On Hold'],
        message: 'Status must be one of: Plan to Watch, Watching, Completed, On Hold',
      },
    },
  },
  { timestamps: true }
);

// Validate watchedEpisodes <= totalEpisodes
animeSchema.pre('save', function (next) {
  if (this.watchedEpisodes > this.totalEpisodes) {
    return next(new Error('Watched episodes cannot exceed total episodes'));
  }
  next();
});

animeSchema.pre('findOneAndUpdate', function (next) {
  const update = this.getUpdate();
  const watched = update.watchedEpisodes ?? update.$set?.watchedEpisodes;
  const total = update.totalEpisodes ?? update.$set?.totalEpisodes;
  if (watched !== undefined && total !== undefined && watched > total) {
    return next(new Error('Watched episodes cannot exceed total episodes'));
  }
  next();
});

const Anime = mongoose.model('Anime', animeSchema, 'anime');

// ─── Helper ────────────────────────────────────────────────────────────────────

function isValidId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

function formatValidationError(err) {
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((e) => e.message);
    return messages.join('. ');
  }
  return err.message;
}

// ─── Routes ───────────────────────────────────────────────────────────────────

// GET /api/anime – retrieve all anime, newest first
app.get('/api/anime', async (req, res) => {
  try {
    const list = await Anime.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve anime list' });
  }
});

// POST /api/anime – add anime
app.post('/api/anime', async (req, res) => {
  try {
    const { title, genre, totalEpisodes, watchedEpisodes, rating, status } = req.body;

    if (!title || !genre || !totalEpisodes || !status) {
      return res.status(400).json({ error: 'Title, genre, total episodes, and status are required' });
    }

    const anime = new Anime({
      title,
      genre,
      totalEpisodes: Number(totalEpisodes),
      watchedEpisodes: Number(watchedEpisodes) || 0,
      rating: rating !== '' && rating !== undefined && rating !== null ? Number(rating) : null,
      status,
    });

    const saved = await anime.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: formatValidationError(err) });
  }
});

// PUT /api/anime/:id – update anime
app.put('/api/anime/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) return res.status(400).json({ error: 'Invalid anime ID' });

    const { title, genre, totalEpisodes, watchedEpisodes, rating, status } = req.body;

    const updates = {
      title,
      genre,
      totalEpisodes: Number(totalEpisodes),
      watchedEpisodes: Number(watchedEpisodes) || 0,
      rating: rating !== '' && rating !== undefined && rating !== null ? Number(rating) : null,
      status,
    };

    // Cross-field validation
    if (updates.watchedEpisodes > updates.totalEpisodes) {
      return res.status(400).json({ error: 'Watched episodes cannot exceed total episodes' });
    }

    const updated = await Anime.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!updated) return res.status(404).json({ error: 'Anime not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: formatValidationError(err) });
  }
});

// DELETE /api/anime/:id – delete anime
app.delete('/api/anime/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) return res.status(400).json({ error: 'Invalid anime ID' });

    const deleted = await Anime.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: 'Anime not found' });
    res.json({ message: 'Anime deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete anime' });
  }
});

// ─── DB Connection + Server Start ─────────────────────────────────────────────

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('✅  Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀  Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌  MongoDB connection failed:', err.message);
    process.exit(1);
  });
