const express = require("express");
const router = express.Router();
const {InfoController} = require("../../controllers/index.js");
const airplaneRoutes = require("./airplane-routes.js");
const cityRoutes = require("./city-routes.js");

router.get("/info",InfoController.info);
router.use("/airplanes", airplaneRoutes);
router.use("/cities", cityRoutes);


module.exports = router;