const express = require("express");
const mongoose = require("mongoose");

const myConnection = () => {
  mongoose.connect("mongodb://0.0.0.0/OnitoDB");
  const connected = mongoose.connection;

  connected.on("error", (error) => {
    console.log(error);
  });

  connected.on("open", () => {
    console.log("Connected to the database");
  });
};

module.exports = myConnection;
