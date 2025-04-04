// routes/bookings.js
const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Route to handle booking requests
router.post('/', async (req, res) => {
    try {
        const newBooking = new Booking(req.body);
        await newBooking.save();
        res.status(201).send('Booking request received successfully!');
    } catch (error) {
        console.error('Error saving booking:', error);
        res.status(500).send('Failed to process booking request.');
    }
});

module.exports = router;
