const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  location: {
    country: String,
    city: String,
    address: String
  },
  starRating: { type: Number, min: 1, max: 10 },
  priceRange: { from: Number, to: Number },
  mainImage: String,
  galleryImages: [String],
  // Added these 3 crucial fields missing in your original schema
  rating: { type: Number, min: 0, max: 10 },       // Overall rating
  reviewCount: Number,                             // Total reviews
  amenities: [{ icon: String, name: String }],     // For amenities tab
  
  features: [{ icon: String, name: String }],
  
rooms: [{
    type: { 
        type: String, 
        enum: [
            'Aurora Cabin',
            'Beach Pool Villa',
            'Beach Villa',
            'Business Suite',
            'Classic Double Room',
            'Classic Twin Room',
            'Comfort single room',
            'Deluxe Double Room',
            'Deluxe King Room',
            'Deluxe Room',
            'Deluxe Twin Room',
            'Double fancy room',
            'Double Standard room',
            'Executive Suite',
            'Family Igloo','Deluxe Suite',
            'Family Cabin',
            'Family Lagoon Suite',
            'Family Room',
            'Family Suite',
            'Garden Room',
            'Garden Suite',
            'Glass Dome Room',
            'Heritage Suite',
            'Island Villa',
            'Junior Suite',
            'Luxury Double Room',
            'Luxury Single Room',
            'Luxury Suite',
            'Luxury Twin Room',
            'Overwater Villa',
            'Panorama Suite',
            'Premium Double Room',
            'Premium Single Room',
            'Royal Room',
            'Sea View Suite',
            'Standard Room',
            'Suite room',
            'Superior Family Room',
            'Water Retreat','Ocean Suite'
        ] 
    },
    image: String,
    size: Number,
    maxGuests: Number,
    bedType: String,
    price: Number,
    amenities: [String],
    note: String  // For room policies like "Non-refundable"
  }],
  reviews: [{
    title: String,        // Added for review titles
    user: String,
    rating: { type: Number, min: 1, max: 10 },
    text: String,
    pros: String,        // For review pros/cons
    cons: String,
    date: { type: Date, default: Date.now }
  }],
  policies: [String],
  ratingCategories: [{   // For ratings bars (cleanliness, amenities etc.)
    name: String,
    score: Number
  }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Hotel', hotelSchema);
