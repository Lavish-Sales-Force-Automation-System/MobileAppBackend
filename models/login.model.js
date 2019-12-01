const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const loginSchema = new Schema({
  Username: {
    type: String,
	required: true
  },
  Password: {
    type: String,
	required: true
  }
  });
module.exports = mongoose.model("Login", loginSchema);
