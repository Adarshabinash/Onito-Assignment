const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  DOB: {
    type: String,
    required: true,
  },
  Sex: {
    type: String,
    required: true,
  },
  Mobile: {
    type: Number,
  },
  GovtId: {
    type: String,
  },
  IdNum: {
    type: String,
  },
  Guardian: {
    type: String,
  },
  GuardianName: {
    type: String,
  },
  Email: {
    type: String,
  },
  EmergencyNum: {
    type: Number,
  },
  Address: {
    type: String,
  },
  State: {
    type: String,
  },
  City: {
    type: String,
  },
  Country: {
    type: String,
  },
  PIN: {
    type: Number,
  },
  Occupation: {
    type: String,
  },
  Religion: {
    type: String,
  },
  MaritalStatus: {
    type: String,
    default: "No",
  },
  Blood: {
    type: String,
  },
  Nationality: {
    type: String,
  },
});

module.exports = mongoose.model("userSchema", userSchema);
