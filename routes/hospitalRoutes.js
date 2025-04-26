const express = require("express");
const router = express.Router();
const { getAvailableHospitals } = require("../controllers/hospitalController");

router.get("/", getAvailableHospitals);

module.exports = router;
