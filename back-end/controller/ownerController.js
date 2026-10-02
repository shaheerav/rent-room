const Owner = require("../models/owner");

//---- SIGN UP----//
const ownerSignup = async (req, res) => {
  try {
    const { ownerName, phoneNumber, code } = req.body;
    const existingOwner = await Owner.findOne({ phoneNumber });
    if (existingOwner) {
      return res.status(400).json({ error: "Phone number already registered" });
    }
    const newOwner = new Owner({
      name: ownerName,
      phoneNumber,
      code,
    });
    await newOwner.save();
    res.status(201).json({
      message: "Owner registered successfully",
      owner: {
        id: newOwner._id,
        name: newOwner.name,
        phoneNumber: newOwner.phoneNumber,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// ----- LOGIN-----//
const ownerLogin = async (req, res) => {
  try {
    const { ownerName, code } = req.body;
    console.log(req.body);
    if (!ownerName || !code) {
      return res.status(400).json({ error: "name and code is required" });
    }

    const owner = await Owner.findOne({ name: ownerName });
    if (!owner) {
      return res.status(404).json({ error: "Owner not found" });
    }
    if (String(owner.code) !== String(code).trim()) {
      return res.status(401).json({ error: "Incorrect access code" });
    }
    res.status(200).json({
      message: "Login successfyl",
      owner: {
        id: owner._id,
        name: owner.name,
        phoneNumeber: owner.phoneNumber,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { ownerSignup, ownerLogin };
