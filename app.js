require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const crudRoutes = require('./routes/crud');

const app = express();
app.use(express.json());

app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(crudRoutes);

app.use((error, req, res, next) => {

    console.log(error);
    res.status(error.statusCode || 500).json({
        message: error.message,
        data: error.data
    });

});

mongoose.connect(MONGODBURL)
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

