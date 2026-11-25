const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

// Import routes
const schemesRoute = require("./routes/schemes");
const busesRoute = require("./routes/buses");
const clinicsRoute = require("./routes/clinics");

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to NammaMarga Backend!");
});

// Health check
app.get("/api/health", (req, res) => {
    res.json({
        status: "success",
        message: "NammaMarga backend is running!"
    });
});

// Government schemes API
app.use("/api/schemes", schemesRoute);

// Bus routes API
app.use("/api/buses", busesRoute);

// Clinics API
app.use("/api/clinics", clinicsRoute);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});