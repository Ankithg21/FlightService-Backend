const express = require("express");
const router = express.Router();
const {FlightController} = require("../../controllers");
const {FlightMiddlewares} = require("../../middlewares");
const { FlightService } = require("../../services");

// POST /api/v1/flights
router.post(
    "/",
    FlightMiddlewares.validateCreateRequest,
    FlightController.createFlight
);

// Query string.
// GET /api/v1/flights?trips=BLR-MUM
router.get(
    "/",
    FlightController.getAllFlights
)

// GET /api/v1/flights/:id
router.get(
    "/:id",
    FlightController.getFlight
);

// PATCH /api/v1/flights/seats
router.patch(
    "/:id/seats",
    FlightMiddlewares.validateUpdateSeatsRequest,
    FlightController.updateSeats
);

module.exports = router;