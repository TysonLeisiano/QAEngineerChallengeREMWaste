require('dotenv').config(); // Load .env variables first

const express = require('express');
const mongoose = require('mongoose');
const crudRoutes = require('./routes/crud');

const app = express();
const PORT = process.env.PORT || 8080;

const MONGODBURL = process.env.MONGODBURL;

if (!MONGODBURL) {
  console.error("❌ MONGODBURL is not defined in .env");
  process.exit(1);
}

app.use(express.json());

// CORS Headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// API Routes
app.use(crudRoutes);

// Error Handling Middleware
app.use((error, req, res, next) => {
  console.error(error);
  res.status(error.statusCode || 500).json({
    message: error.message,
    data: error.data
  });
});

// MongoDB Connection
mongoose
  .connect(MONGODBURL)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
