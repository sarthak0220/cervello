const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();
const { ensureLoggedIn } = require('../middleware/authMiddleware');

router.post("/register", authController.register)
router.post("/login", authController.login);
router.get('/hotels/:id/gallery', authController.showGallery);
router.get('/hotels/:hotelId/book/:roomType', ensureLoggedIn, authController.getBookingForm);
router.post('/api/auth/bookings', ensureLoggedIn, authController.createBooking);

module.exports = router;