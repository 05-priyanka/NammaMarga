const express = require("express");
const router = express.Router();

const buses = require("../data/buses.json");

// Get all bus routes
router.get("/", (req, res) => {
    res.json(buses);
});

// Search bus route by ID
router.get("/:id", (req, res) => {
    const bus = buses.find(
        (item) => item.id === parseInt(req.params.id)
    );

    if (!bus) {
        return res.status(404).json({
            message: "Bus route not found"
        });
    }

    res.json(bus);
});

module.exports = router;