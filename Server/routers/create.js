const userSchema = require("../model/schemaModel");

module.exports = async (req, res) => {
  const createData = new userSchema({
    Name: req.body.Name,
    DOB: req.body.DOB,
    Sex: req.body.Sex,
    Mobile: req.body.Mobile,
    GovtId: req.body.GovtId,
    IdNum: req.body.IdNum,
    Guardian: req.body.Guardian,
    GuardianName: req.body.GuardianName,
    Email: req.body.Email,
    EmergencyNum: req.body.EmergencyNum,
    Address: req.body.Address,
    State: req.body.State,
    City: req.body.City,
    Country: req.body.Country,
    PIN: req.body.PIN,
    Occupation: req.body.Occupation,
    Religion: req.body.Religion,
    MaritalStatus: req.body.MaritalStatus,
    Blood: req.body.Blood,
    Nationality: req.body.Nationality,
  });
  try {
    const createPost = await createData.save();
    res.send(createPost);
  } catch (error) {
    res.send("Error: " + error);
  }
};
