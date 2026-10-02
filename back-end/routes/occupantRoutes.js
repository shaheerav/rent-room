const express = require("express");
const router = express.Router();
const room = require("../models/room");

router.post("/room", async (req, res) => {
  try {
    const room = new Room(req.body);
    await room.save();
    res.status(201).json(room);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
