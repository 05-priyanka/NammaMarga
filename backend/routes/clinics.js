const express = require("express");
const router = express.Router();
const clinics = require("../data/clinics.json");

// GET all clinics
router.get("/", (req, res) => {
    res.json(clinics);
});

module.exports = router;