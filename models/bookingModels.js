// models/bookingModel.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  hotel: {
    type: String,
    ref: 'Hotel',
    required: true
  },
  room: {
    type: String,
    required: true
  },
  checkIn: {
    type: Date,
    required: true
  },
  checkOut: {
    type: Date,
    required: true
  },
  bedOption: String,
  guest: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    }
  },
  payment: {
    nameOnCard: String,
    // Store only last 4 digits for security
    cardNumberLast4: String,
    // Don't store full card details for PCI compliance
    expiryDate: String
  },
  priceDetails: {
    pricePerNight: Number,
    nights: Number,
    cityTax: {
      type: Number,
      default: 40
    },
    serviceFee: {
      type: Number,
      default: 20
    },
    total: Number
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Booking', bookingSchema);
