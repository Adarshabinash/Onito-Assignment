import React from "react";

const OtherDetails = ({ register,errors }) => {
  return (
    <div>
      <u>
        <h3>Other Details</h3>
      </u>
      <label>Occupation</label>
      <input
        type="text"
        placeholder="Enter occupation"
        {...register("Occupation")}
      />
      <label>Religion</label>
      <select {...register("Religion")}>
        <option value="" disabled selected hidden>
          Enter Religion
        </option>
        <option value="Hindu">Hindu</option>
        <option value="Muslim">Muslim</option>
        <option value="Christian">Christian</option>
        <option value="Buddhist">Buddhist</option>
        <option value="Jain">Jain</option>
        <option value="Sikh">Sikh</option>
      </select>
      <label>Marital Status</label>
      <select {...register("MaritalStatus")}>
        <option value="" disabled selected hidden>
          Marital Status
        </option>
        <option value="Married">Married</option>
        <option value="Unmarried">Unmarried</option>
      </select>
      <label>Blood Group</label>
      <select {...register("BloodGroup")}>
        <option value="" disabled selected hidden>
          Group
        </option>
        <option value="A+">A+</option>
        <option value="A-">A- </option>
        <option value="B+">B+</option>
        <option value="B-">B- </option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB- </option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
      </select>
      <label>Nationality</label>
      <input
        type="text"
        placeholder="Enter Nationality"
        {...register("Nationality")}
      />

      <br />
    </div>
  );
};

export default OtherDetails;
