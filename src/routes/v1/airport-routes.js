const express = require("express");
const router = express.Router();
const {AirportController} = require("../../controllers");
const {AirportMiddlewares} = require("../../middlewares");

// POST /api/v1/airports
router.post(
    "/",
    AirportMiddlewares.validateCreateRequest,
    AirportController.createAirport
);

// GET /api/v1/airports
router.get(
    "/",
    AirportController.getAirports
);

// DETETE /api/v1/airports/:id
router.delete(
    "/:id",
    AirportController.destroyAirport
);

// GET /api/v1/airports/:id
router.get(
    "/:id",
    AirportController.getAirport
);

// PATCH /api/v1/airports/:id
router.patch(
    "/:id",
    AirportController.updateAirport
);

module.exports = router;