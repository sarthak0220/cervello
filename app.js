const express = require('express');
const path = require('path');
const mongoose = require("mongoose");
const morgan = require("morgan")
const cors = require("cors");
const session = require('express-session');

const app = express();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

  
app.use(session({
    secret: 'your_secret_key', // use a strong secret in production
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // set to true if using HTTPS
}));

app.use((req, res, next) => {
    res.locals.userId = req.session.userId;
    next();
});

app.use(morgan("dev"))
app.use(cors())

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));



// This is used to ensure that you can grab the data from any form
app.use(express.urlencoded({ extended: true }));
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

app.listen(4000, () => {
    console.log("Server is running on Port 4000");
});