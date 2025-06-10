const express = require("express");
const router = express.Router();
const {InfoController} = require("../../controllers/index.js");
const airplaneRoutes = require("./airplane-routes.js");
const cityRoutes = require("./city-routes.js");
const airportRoutes = require("./airport-routes.js");
const flightRoutes = require("./flight-routes.js");

router.get("/info",InfoController.info);
router.use("/airplanes", airplaneRoutes);
router.use("/cities", cityRoutes);
router.use("/airports", airportRoutes);
router.use("/flights", flightRoutes);


module.exports = router;