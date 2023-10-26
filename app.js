//import connectDB from "./config/db.js";
const express = require("express");
const app = express();
const connectDB = require('./config/db.js');

const PORT = process.env.PORT || 8000;


connectDB();

app.get('/', (req, res) => {
    res.send(`Hello World`);
});

app.listen(PORT, (req, res) => {
    console.log(`Server running on port ${PORT}`);
});


