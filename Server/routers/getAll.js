const userSchema = require("../model/schemaModel");

module.exports = async (req, res) => {
  try {
    let allData = await userSchema.find();
    res.send(allData);
  } catch (error) {
    res.send("The Error is-" + error);
  }
};
