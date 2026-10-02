const express = require("express");
const router = express.Router();
const { ownerSignup, ownerLogin } = require("../controller/ownerController");

router.post("/signup", ownerSignup);
router.post("/login", ownerLogin);

module.exports = router;
