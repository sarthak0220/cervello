const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Hotels = require('../models/hotelModel');
const Booking = require('../models/bookingModels');
const User = require('../models/userModel');
const Restaurant = require('../models/restaurantModel');
const RestaurantBooking = require('../models/restaurantBookingModel');
const SpaBooking = require('../models/spaBooking');
const { ensureLoggedIn } = require('../middleware/authMiddleware');
router.get("/", (req, res) => {
    let title = "Cervello";
    const message = req.session.successMessage || "";
    req.session.successMessage = null; // Clear after showing
    res.render("index", { title, message });
});
router.get("/register", (req, res) => {
    res.render("register");
})

router.get("/hotel", (req, res) => {
    res.render("hotel");
})

router.get("/gallery", (req, res) => {
    res.render("gallery");
})

router.get("/dining", async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.render("dining", { restaurants });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

router.get("/dining/:id",ensureLoggedIn, async (req, res) => {
const restaurant = await Restaurant.findById(req.params.id);
if (!restaurant) return res.status(404).send("Restaurant not found");
res.render("dining-detail", { restaurant });
});

router.post("/dining/:id/details", async (req, res) => {
  const { guests, time, date } = req.body;
  const { id } = req.params;

  const restaurant = await Restaurant.findById(id);
  if (!restaurant) return res.status(404).send("Restaurant not found");

  res.render("dining-user-details", {
    restaurant,
    guests,
    time,
    date,
    showPopup: false
  });
});


router.post("/dining/:id/confirm", async (req, res) => {
  try {
    const { name, email, phone, guests, time, date } = req.body;
    const restaurantId = req.params.id; // No need to convert to ObjectId for findById

    // Save the booking
    const booking = new RestaurantBooking({
      restaurantId,
      name,
      email,
      phone,
      guests,
      time,
      date
    });
    await booking.save();

    // Fetch the restaurant object from the database
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) return res.status(404).send("Restaurant not found");

    // Render the same page, passing showPopup: true
    res.render("dining-user-details", {
      restaurant,
      guests,
      time,
      date,
      showPopup: true
    });
  } catch (err) {
    res.status(500).send("Booking failed");
  }
});



router.get("/login", (req, res) => {
    res.render("login", { message: "" });
});
router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});
router.get("/spa", (req, res) => {
    res.render("spa");
});

router.get('/spa-session',ensureLoggedIn, (req, res) => {
    res.render('spa-session');
});

router.post('/spa-session', async (req, res) => {
    try {
        const newBooking = new SpaBooking(req.body);
        await newBooking.save();
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(400).json({ success: false, message: 'Invalid input' });
    }
});


router.get("/booking", (req, res) => {
    res.render("booking");
});

// GET /hotels/:id - Show hotel overview page
router.get('/hotels/:_id', async (req, res) => {
    try {
        const hotel = await Hotels.findById(req.params._id);
        if (!hotel) return res.status(404).send('Hotel not found');
        res.render('hotel-detail', { hotel });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.get('/hotels/:_id/hotelGallery', async (req, res) => {
    const hotel = await Hotels.findById(req.params._id);
    if (!hotel) return res.status(404).send('Hotel not found');
    res.render('hotelGallery', { hotel });
  });

  router.post('/api/auth/bookings', ensureLoggedIn, async (req, res) => {
    try {
      console.log('Booking request received:', req.body);
  
      // Map the request body to the Booking schema
      const booking = new Booking({
        hotel: req.body.hotelId,
        room: req.body.roomType,
        checkIn: new Date(req.body.checkIn),
        checkOut: new Date(req.body.checkOut),
        bedOption: req.body.bedOption,
        guest: {
          name: req.body.guestName,
          email: req.body.email,
          phone: req.body.phone,
        },
        payment: {
          nameOnCard: req.body.cardName,
          cardNumberLast4: req.body.cardNumber.slice(-4), // Store only the last 4 digits
          expiryDate: req.body.expiry,
        },
        priceDetails: {
          pricePerNight: req.body.pricePerNight,
          nights: req.body.nights,
          cityTax: 40,
          serviceFee: 20,
          total: req.body.total,
        },
      });
  
      // Save the booking to MongoDB
      await booking.save();
      res.status(201).json({ success: true, bookingId: booking._id });
    } catch (err) {
      console.error('Booking error:', err);
      res.status(500).json({ success: false, error: err.message });
    }
  });

  router.get('/hotels/:_id/book/:roomType', ensureLoggedIn, async (req, res) => {
    try {
      const hotel = await Hotels.findById(req.params._id);
      if (!hotel) return res.status(404).send('Hotel not found');
      
      // Find the selected room
      const room = hotel.rooms.find(r => r.type === req.params.roomType);
      if (!room) return res.status(404).send('Room not found');
      
      res.render('booking-form', { hotel, room, roomType: req.params.roomType });
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });
  
router.get("/aboutus", (req, res) => {
    res.render("aboutus");
});
router.get("/new", (req, res) => {
    res.render("new");
});
module.exports = router;