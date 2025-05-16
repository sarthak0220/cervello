const mongoose = require('mongoose');

const restaurantBookingSchema = new mongoose.Schema({
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
  guests: Number,
  time: String,
  date: String,
  name: String,
  email: String,
  phone: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('RestaurantBooking', restaurantBookingSchema);
