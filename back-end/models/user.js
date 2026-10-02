const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
    },
    adharNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    userPhoto: {
      type: String,
      default: "",
    },
    adharPhoto: {
      type: String,
      default: "",
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
    },
    advanceAmount: {
      type: Number,
      default: 0,
      required: true,
    },
    advancePaidStatus: {
      type: String,
      enum: ["Paid", "Paratially Paid", "Pending"],
      default: "Paid",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
