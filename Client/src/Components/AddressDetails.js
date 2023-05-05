import React from "react";

const AddressDetails = ({ register,errors }) => {
  return (
    <div className="addressDetails">
      <u>
        <h3>Address Details</h3>
      </u>
      <label>Address</label>
      <input type="text" placeholder="Enter Address" {...register("Address")} />
      <label>State</label>
      <select {...register("State")}>
        <option value="" disabled selected hidden>
          Choose State
        </option>
        <option value="Andhra Pradesh">Andhra Pradesh</option>
        <option value="Arunanchal Pradesh">Arunanchal Pradesh</option>
        <option value="Assam">Assam</option>
        <option value="Bihar">Bihar</option>
        <option value="Chhattishgarh">Chhattishgarh</option>
        <option value="Goa">Goa</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Haryana">Haryana</option>
        <option value="Himachal Pradesh">Himachal Pradesh</option>
        <option value="Jharkhand">Jharkhand</option>
        <option value="Karnataka">Karnataka</option>
        <option value="Kerala">Kerala</option>
        <option value="Madhya Pradesh">Madhya Pradesh</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Manipur">Manipur</option>
        <option value="Meghalaya">Meghalaya</option>
        <option value="Mizoram">Mizoram</option>
        <option value="Nagaland">Nagaland</option>
        <option value="Odisha">Odisha</option>
        <option value="Punjab">Punjab</option>
        <option value="Rajastan">Rajastan</option>
        <option value="Nagaland">Nagaland</option>
        <option value="Tamilnadu">Tamilnadu</option>
        <option value="Telangana">Telangana</option>
        <option value="Tripura">Tripura</option>
        <option value="Uttarakhand">Uttarakhand</option>
        <option value="Uttar Pradesh">Uttar Pradesh</option>
        <option value="West Bengal">West Bengal</option>
      </select>
      <label>City</label>
      <input
        type="text"
        placeholder="Enter city/town/village"
        {...register("City")}
      />
      <label>Country</label>
      <input type="text" placeholder="Enter Country" {...register("Country")} />
      <label>Pincode</label>
      <input type="text" placeholder="Enter pincode" {...register("PIN")} />

      <br />
    </div>
  );
};

export default AddressDetails;
