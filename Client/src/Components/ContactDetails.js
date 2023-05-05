import React from "react";

const ContactDetails = ({ register, errors }) => {
  return (
    <div className="contactDetails">
      <u>
        <h3>Contact Details</h3>
      </u>
      <label>Guardian Details</label>
      <select {...register("Guardian")}>
        <option value="" disabled selected hidden>
          Enter Guardian
        </option>
        <option value="Father">Father</option>
        <option value="Mother">Mother</option>
        <option value="Brother">Brother</option>
        <option value="Sister">Sister</option>
        <option value="Other">Other</option>
      </select>
      <input
        type="text"
        placeholder="Enter Guardian Name"
        {...register("GuardianName")}
      />
      <label>Email</label>
      <input type="email" placeholder="Enter Email" {...register("Email")} />
      <label>Emergency Contact Number</label>
      <input type="text" {...register("EmergencyNumber")} />
      <p>{errors.EmergencyNumber?.message}</p>

      <br />
    </div>
  );
};

export default ContactDetails;
