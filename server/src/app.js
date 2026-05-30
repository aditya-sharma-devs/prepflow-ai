const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes")
const roadmapRoutes = require("./routes/roadmapRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes)
app.use("/api/roadmaps", roadmapRoutes);

app.get("/", (req, res) => {
  res.send("Prepflow Backend Running");
});

module.exports = app;
