const express = require("express");
const router = express.Router();

const schemes = require("../data/schemes.json");

// Get all government schemes
router.get("/", (req, res) => {
    res.json(schemes);
});

// Get a particular scheme by ID
router.get("/:id", (req, res) => {
    const scheme = schemes.find(
        (item) => item.id === parseInt(req.params.id)
    );

    if (!scheme) {
        return res.status(404).json({
            message: "Scheme not found"
        });
    }

    res.json(scheme);
});

module.exports = router;