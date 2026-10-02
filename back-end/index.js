require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const occupantRoutes = require("./routes/occupantRoutes");
const authRouter = require("./routes/authRouter");

const app = express();

//Connect to Database
connectDB();

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("/api", occupantRoutes);
app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Room Managment API Running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server Listening on port ${PORT}`);
});
