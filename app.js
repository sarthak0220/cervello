const express = require('express');
const path = require('path');

const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const morgan = require("morgan")
const cors = require("cors")

const app = express();

app.use(morgan("dev"))
app.use(cors())

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

// Middleware to log requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// This is used to ensure that you can grab the data from any form
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Set EJS as the view engine
app.set("view engine", "ejs");

// Optional: ensure views path is correct
app.set("views", path.join(__dirname, "views"));

// Define routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(3000, () => {
    console.log("Server is running on Port 3000");
});