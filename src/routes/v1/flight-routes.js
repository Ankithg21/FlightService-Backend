const express = require("express");
const router = express.Router();
const {FlightController} = require("../../controllers");
const {FlightMiddlewares} = require("../../middlewares");

// POST /api/v1/flights
router.post(
    "/",
    FlightMiddlewares.validateCreateRequest,
    FlightController.createFlight
);

module.exports = router;