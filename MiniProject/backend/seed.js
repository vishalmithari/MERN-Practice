require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/animetracker';

const animeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    genre: { type: String, required: true, trim: true },
    totalEpisodes: { type: Number, required: true },
    watchedEpisodes: { type: Number, default: 0 },
    rating: { type: Number, default: null },
    status: { type: String, required: true },
  },
  { timestamps: true }
);

const Anime = mongoose.model('Anime', animeSchema, 'anime');

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');

    const batchFiles = ['anime_batch_1.json', 'anime_batch_2.json', 'anime_batch_3.json'];
    let totalImported = 0;

    for (const file of batchFiles) {
      const filePath = path.resolve(__dirname, '..', file);
      if (fs.existsSync(filePath)) {
        const raw = fs.readFileSync(filePath, 'utf-8');
        const data = JSON.parse(raw);
        const result = await Anime.insertMany(data);
        console.log(`Imported ${result.length} anime from ${file}`);
        totalImported += result.length;
      }
    }

    console.log(`Successfully seeded ${totalImported} anime entries.`);
    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  }
}

seed();
