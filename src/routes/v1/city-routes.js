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

module.exports = router;

