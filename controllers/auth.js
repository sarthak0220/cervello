const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const Hotels = require('../models/hotelModel');
const Booking = require('../models/bookingModels');
const User = require('../models/userModel');


// Register
exports.register = async (req, res) => {
    const { name, email, password, passwordconfirm } = req.body;

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{6,}$/;
if (!passwordRegex.test(password)) {
    return res.render('register', { message: "Password must be at least 6 characters, include letters, digits, and one special character." });
}

    if (password !== passwordconfirm) {
        return res.render('register', { message: "Passwords do not match" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.render('register', { message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 8);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    req.session.userId = user._id;
    req.session.successMessage = "User registered successfully";
    return res.redirect('/');
};

// Login
exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        return res.render('login', { message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.render('login', { message: "Invalid email or password" });
    }
    req.session.userId = user._id;

    return res.redirect('/');
};


// In your controller
exports.showGallery = async (req, res) => {
    try {
      const hotel = await Hotels.findById(req.params.id);
      
      if (!hotel) {
        return res.status(404).send('Hotel not found');
      }
      
      res.render('gallery', { hotel });
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  };


exports.getBookingForm = async (req, res) => {
  try {
    const { hotelId, roomType } = req.params;
    
    const hotel = await Hotels.findById(hotelId);
    if (!hotel) {
      return res.status(404).send('Hotel not found');
    }
    
    // Find the selected room
    const room = hotel.rooms.find(r => r.type === roomType);
    if (!room) {
      return res.status(404).send('Room not found');
    }
    
    res.render('booking-form', { 
      hotel, 
      room, 
      roomType 
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

exports.createBooking = async (req, res) => {
  try {
    const {
      checkIn,
      checkOut,
      bedOption,
      guestName,
      email,
      phone,
      cardName,
      cardNumber,
      expiry,
      cvc,
    } = req.body;

    // Create new booking
    const booking = new Booking({
      hotel: req.body.hotelId, // Ensure `hotelId` is passed from the frontend
      room: req.body.roomType, // Ensure `roomType` is passed from the frontend
      checkIn: new Date(checkIn),
      checkOut: new Date(checkOut),
      bedOption,
      guest: {
        name: guestName,
        email,
        phone,
      },
      payment: {
        nameOnCard: cardName,
        cardNumberLast4: cardNumber.slice(-4), // Store only last 4 digits
        expiryDate: expiry,
      },
      priceDetails: {
        pricePerNight: req.body.pricePerNight, // Ensure `pricePerNight` is passed
        nights: req.body.nights, // Ensure `nights` is passed
        cityTax: 40,
        serviceFee: 20,
        total: req.body.total, // Ensure `total` is passed
      },
    });

    await booking.save(); // Save booking to MongoDB
    res.status(201).json({ success: true, bookingId: booking._id });
  } catch (err) {
    console.error('Error creating booking:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
