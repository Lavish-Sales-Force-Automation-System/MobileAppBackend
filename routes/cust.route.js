const express = require("express");
const router = express.Router();
const dist = require("../controllers/cust.controller.js");

router.get('/all', cust.getAll)

module.exports = router;
 