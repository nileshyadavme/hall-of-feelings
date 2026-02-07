const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get("/", (req, res) => {
  res.send("Hall-of-feelings backend running");
});

// Dummy recommendation route
app.post("/recommend", (req, res) => {
  try {
    const { text } = req.body;

    console.log("User query:", text);

    // Fake ML output (for frontend testing)
    const dummyResponse = {
      emotion: "sad",
      genre: "comedy",
      result: [
        "The Mask",
        "Superbad",
        "21 Jump Street"
      ]
    };

    res.json(dummyResponse);

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
