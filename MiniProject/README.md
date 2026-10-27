# Anime Watch Tracker

A full-stack anime watchlist app built with **React + Vite** (frontend) and **Node.js + Express + MongoDB** (backend).

---

## Required Software

| Software | Minimum Version |
|----------|----------------|
| Node.js  | 18+            |
| npm      | 9+             |
| MongoDB  | 6+ (Community) |

---

## Project Structure

```
anime-watch-tracker/
├── frontend/          # React + Vite app
│   └── src/
│       ├── App.jsx    # All components & logic
│       ├── main.jsx
│       └── index.css
├── backend/
│   ├── server.js      # Express + Mongoose server
│   ├── .env           # Your local config (not in git)
│   └── .env.example
└── README.md
```

---

## 1. Configure MongoDB

Copy the example env file and set your MongoDB URI:

```bash
cd backend
copy .env.example .env
```

Default `.env` (works for a local MongoDB installation):
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/animetracker
```

For **MongoDB Atlas**, replace `MONGO_URI` with your Atlas connection string:
```
MONGO_URI=mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/animetracker?retryWrites=true&w=majority
```

---

## 2. Start MongoDB Locally

**Windows (if installed as a service):**
```bash
net start MongoDB
```

**Or run manually:**
```bash
mongod --dbpath "C:\data\db"
```

---

## 3. Install & Run the Backend

```bash
cd backend
npm install
npm run dev
```

The API server starts at **http://localhost:5000**

---

## 4. Install & Run the Frontend

Open a **second terminal**:

```bash
cd frontend
npm install
npm run dev
```

The React app starts at **http://localhost:5173**

---

## API Endpoints

| Method | Endpoint          | Description       |
|--------|-------------------|-------------------|
| GET    | /api/anime        | Get all anime     |
| POST   | /api/anime        | Add anime         |
| PUT    | /api/anime/:id    | Update anime      |
| DELETE | /api/anime/:id    | Delete anime      |

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `❌ MongoDB connection failed` | Ensure MongoDB is running (`mongod`) |
| Frontend shows "Could not connect…" | Start the backend first on port 5000 |
| `npm : cannot be loaded` (PowerShell) | Use `cmd` instead: `cmd /c "npm install"` |
| Port 5000 already in use | Change `PORT` in `backend/.env` |
| CORS errors | Ensure frontend runs on `http://localhost:5173` |
