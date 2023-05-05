const userSchema = require("../model/schemaModel");

module.exports = async (req, res) => {
  try {
    const deleteEntry = await userSchema.findByIdAndDelete(req.params.id);
    res.send(deleteEntry);
  } catch (error) {
    res.send("Error- - -" + error);
  }
};
