const express = require("express");
const router = express.Router();
const {FlightController} = require("../../controllers");

// POST /api/v1/flights
router.post(
    "/",
    FlightController.createFlight
);

module.exports = router;