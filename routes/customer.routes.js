const express = require("express");
const router = express.Router();
const customer = require("../controllers/customer.controller");

router.get("/select", customer.view);
router.post("/select", customer.select);
module.exports = router;
