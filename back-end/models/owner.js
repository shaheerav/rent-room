const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    code: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Owner", ownerSchema);
