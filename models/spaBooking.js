// models/spaBooking.js

const mongoose = require('mongoose');

const spaBookingSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        match: /^[A-Za-z]+$/,
    },
    lastName: {
        type: String,
        required: true,
        match: /^[A-Za-z]+$/,
    },
    email: {
        type: String,
        required: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    phone: {
        type: String,
        required: true,
        match: /^\d{10}$/,
    },
    hours: {
        type: Number,
        required: true,
        min: 1,
        max: 6,
    },
    message: {
        type: String,
        maxlength: 500,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('SpaBooking', spaBookingSchema);
