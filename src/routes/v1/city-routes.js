const express = require("express");
const router = express.Router();
const {CityController} = require("../../controllers");
const {CityMiddlewares} = require("../../middlewares");

// POST /api/v1/cities
router.post(
    "/",
    CityMiddlewares.validateCreateRequest,
    CityController.createCity
);

// DELETE /api/v1/cities/:id
router.delete(
    "/:id",
    CityController.destroyCity
)

// PATCH /api/v1/cities/:id
router.patch(
    "/:id",
    CityMiddlewares.validateCreateRequest,
    CityController.updateCity
)

module.exports = router;

