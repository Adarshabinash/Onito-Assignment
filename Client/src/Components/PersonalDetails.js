import React from "react";

const PersonalDetails = ({ register, errors }) => {
  return (
    <div>
      <u>
        <h3>Personal Details</h3>
      </u>

      <div className="personalDetails">
        <label>Name</label>
        <input type="text" placeholder="Enter name" {...register("Name")} />
        <br />
        <p>{errors.Name?.message}</p>
        <label>Date of Birth</label>
        <input type="date" placeholder="DD/MM/YY" {...register("DOB")} />
        <br />
        <p>{errors.DOB?.message}</p>
        <label>Sex</label>
        <select {...register("Sex")}>
          <option value="" disabled selected hidden>
            Choose Sex
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <br />
        <p>{errors.Sex?.message}</p>
        <label>Mobile</label>
        <input type="text" placeholder="Enter Mobile" {...register("Mobile")} />
        <p>{errors.Mobile?.message}</p>
        <label>Govt Issued Id</label>
        <select {...register("GovtId")}>
          <option value="" disabled selected hidden>
            Choose Id
          </option>
          <option value="Aadhar">Aadahar</option>
          <option value="PAN">PAN</option>
        </select>
        <input type="text" placeholder="Enter Govt Id" {...register("IdNum")} />
        <p>{errors.IdNum?.message}</p>
      </div>

      <br />
    </div>
  );
};

export default PersonalDetails;
