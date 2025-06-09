const express = require("express");
const router = express.Router();
const {CityController} = require("../../controllers");

// POST /api/v1/cities
router.post(
    "/",
    CityController.createCity
);

module.exports = router;

