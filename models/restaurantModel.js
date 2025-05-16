const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
name: String,
description: String,
image: String,
location: String
// Add more fields as needed
});

module.exports = mongoose.model('Restaurant', restaurantSchema);