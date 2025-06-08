const express = require("express");
const router = express.Router();
const {InfoController} = require("../../controllers/index.js");
const airplaneRoutes = require("./airplane-routes.js");

router.get("/info",InfoController.info);
router.use("/airplanes", airplaneRoutes);


module.exports = router;