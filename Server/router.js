const express = require("express");
const router = express.Router();
const userSchema = require("./model/schemaModel");

//To get all the entries:
router.get("/", require("./routers/getAll"));

//To get individual entry:
router.get("/:id", require("./routers/getById"));

//To create a data:
router.post("/", require("./routers/create"));

//to update an entry:
router.patch("/:id", require("./routers/update"));

//To delete an entry:
router.delete("/:id", require("./routers/deleteEntry"));

module.exports = router;
