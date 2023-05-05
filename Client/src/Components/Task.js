import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PersonalDetails from "./PersonalDetails";
import ContactDetails from "./ContactDetails";
import AddressDetails from "./AddressDetails";
import OtherDetails from "./OtherDetails";
import axios from "axios";

const Task = () => {
  let schema = yup.object().shape(
    {
      Occupation: yup
        .string()
        .nullable()
        .notRequired()
        .when("Occupation", {
          is: (value) => value?.length,
          then: (rule) => rule
        }),
      Religion: yup
        .string()
        .nullable()
        .notRequired()
        .when("Religion", {
          is: (value) => value?.length,
          then: (rule) => rule
        }),
      MaritalStatus: yup
        .string()
        .nullable()
        .notRequired()
        .when("MaritalStatus", {
          is: (value) => value?.length,
          then: (rule) => rule,
        }),
      BloodGroup: yup
        .string()
        .nullable()
        .notRequired()
        .when("BloodGroup", {
          is: (value) => value?.length,
          then: (rule) => rule
        }),
      Nationality: yup
        .string()
        .nullable()
        .notRequired()
        .when("Nationality", {
          is: (value) => value?.length,
          then: (rule) => rule.min(3),
        }),
      Address: yup
        .string()
        .nullable()
        .notRequired()
        .when("Address", {
          is: (value) => value?.length,
          then: (rule) => rule.min(6, "Is that a real address"),
        }),
       State: yup
        .string()
        .nullable()
        .notRequired()
        .when("State", {
          is: (value) => value?.length,
          then: (rule) => rule.min(3),
        }),
      City: yup
        .string()
        .nullable()
        .notRequired()
        .when("City", {
          is: (value) => value?.length,
          then: (rule) => rule.min(6),
        }),
      Country: yup
        .string()
        .nullable()
        .notRequired()
        .when("Country", {
          is: (value) => value?.length,
          then: (rule) => rule.min(4),
        }),
      PIN: yup
        .string()
        .nullable()
        .notRequired()
        .when("PIN", {
          is: (value) => value?.length,
          then: (rule) => rule.min(6),
        }),
      Guardian: yup
        .string()
        .nullable()
        .notRequired()
        .when("Guardian", {
          is: (value) => value?.length,
          then: (rule) => rule
        }),
      GuardianName: yup
        .string()
        .nullable()
        .notRequired()
        .when("GuardianName", {
          is: (value) => value?.length,
          then: (rule) => rule.min(4),
        }),
      Email: yup
        .string()
        .nullable()
        .notRequired()
        .when("Email", {
          is: (value) => value?.length,
          then: (rule) => rule.email(),
        }),
      EmergencyNumber: yup
        .string()
        .nullable()
        .notRequired()
        .when("EmergencyNumber", {
          is: (value) => value?.length,
          then: (rule) => rule.min(10).max(11),
        }),
      Name: yup.string().required("Can't leave the name empty"),
      DOB: yup.date().required("DOB is a required field"),
      Sex: yup.string().required("Sex is a required field"),
      Mobile: yup
        .string()
        .nullable()
        .notRequired()
        .when("Mobile", {
          is: (value) => value?.length,
          then: (rule) => rule.min(10).max(10),
        }),
      GovtId: yup.string().nullable().notRequired(),
      IdNum: yup
        .string()
        .nullable()
        .notRequired()
        .when("GovtId", {
          is: (value) => value.includes("Aadhar"),
          then: (rule) => rule.min(12).max(12),
        })
        .when("GovtId", {
          is: (value) => value.includes("PAN"),
          then: (rule) => rule.min(10).max(10),
        }),
    },
    [
      ["City", "City"],
      ["State", "State"],
      ["Address", "Address"],
      ["Country", "Country"],
      ["Occupation", "Occupation"],
      ["Mobile", "Mobile"],
      ["GovtId", "GovtId"],
      ["IdNum", "IdNum"],
      ["Guardian", "Guardian"],
      ["GuardianName", "GuardianName"],
      ["Email", "Email"],
      ["PIN", "PIN"],
      ["EmergencyNumber", "EmergencyNumber"],
      ["Religion", "Religion"],
      ["Nationality", "Nationality"],
      ["MaritalStatus", "MaritalStatus"],
      ["BloodGroup", "BloodGroup"],
    ]
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    alert("The details have been submitted");
    axios.post("http://localhost:5000", data, {
      "Content-Type": "application/json",
    });
  };

  console.log(errors);
  return (
    <div className="task">
      <form onSubmit={handleSubmit(onSubmit)}>
        <PersonalDetails register={register} errors={errors} />
        <ContactDetails register={register} errors={errors} />
        <AddressDetails register={register} errors={errors} />
        <OtherDetails register={register} errors={errors} />
        <button type="submit">Submit</button>
      </form>
      <br />
      <hr />
      <br />
    </div>
  );
};

export default Task;
