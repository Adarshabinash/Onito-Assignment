const userSchema = require("../model/schemaModel");

module.exports = async (req, res) => {
  try {
    const singleData = await userSchema.findById(req.params.id);
    res.send(singleData);
  } catch (error) {
    res.send("Error: " + error);
  }
};
