const userSchema = require("../model/schemaModel");

module.exports = async (req, res) => {
  try {
    const myPrevdata = await userSchema.findById(req.params.id);
    myPrevdata.Name = req.body.Name;
    myPrevdata.DOB = req.body.DOB;
    myPrevdata.Sex = req.body.Sex;
    myPrevdata.Mobile = req.body.Mobile;
    myPrevdata.GovtId = req.body.GovtId;
    myPrevdata.IdNum = req.body.IdNum;
    myPrevdata.Guardian = req.body.Guardian;
    myPrevdata.GuardianName = req.body.GuardianName;
    myPrevdata.Email = req.body.Email;
    myPrevdata.EmergencyNum = req.body.EmergencyNum;
    myPrevdata.Address = req.body.Address;
    myPrevdata.State = req.body.State;
    myPrevdata.City = req.body.City;
    myPrevdata.PIN = req.body.PIN;
    myPrevdata.Country = req.body.Country;
    myPrevdata.Occupation = req.body.Occupation;
    myPrevdata.Religion = req.body.Religion;
    myPrevdata.MaritalStatus = req.body.MaritalStatus;
    myPrevdata.Blood = req.body.Blood;
    myPrevdata.Nationality = req.body.Nationality;

    const updateThisEntry = await myPrevdata.save();
    res.send(updateThisEntry);
  } catch (error) {
    res.send("Error: " + error);
  }
};
