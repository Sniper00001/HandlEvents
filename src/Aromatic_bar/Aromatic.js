import React, { useState } from "react";
import Aromatic_data from "./Aromatic_data";
import NavBar from "./NavBar";
import Submission_data from "./Submission_data";

export default function Aromatic() {
  const [userRegister, setUserRegister] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    serviceRating: "",
    beverageQuality: "",
    cleanlinessRating: "",
    overallExperienceRating: "",
  });

  const handleEvent = (e) => {
    const { name, value } = e.target;
    setUserRegister({ ...userRegister, [name]: value });
  };

  const handleClear = () => {
    setUserRegister({
      firstname: "",
      lastname: "",
      email: "",
      number: "",
      serviceRating: "",
      beverageQuality: "",
      cleanlinessRating: "",
      overallExperienceRating: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !userRegister.firstname ||
      !userRegister.lastname ||
      !userRegister.email ||
      !userRegister.number ||
      !userRegister.beverageQuality ||
      !userRegister.serviceRating ||
      !userRegister.cleanlinessRating ||
      !userRegister.overallExperienceRating
    ) {
      alert("All fields are mandatory");
      return;
    }
    console.log(userRegister);
    setUserRegister({
      firstname: "",
      lastname: "",
      email: "",
      number: "",
      serviceRating: "",
      beverageQuality: "",
      cleanlinessRating: "",
      overallExperienceRating: "",
    });

    const submissions = JSON.parse(localStorage.getItem("useRegister")) || [];
    submissions.push(userRegister);
    localStorage.setItem("useRegister", JSON.stringify(submissions));

    alert("Thank you for completing the information");

    console.log(submissions);
  };

  return (
    <div>
      <NavBar />
      <Aromatic_data
        handleEvent={handleEvent}
        userRegister={userRegister}
        handleSubmit={handleSubmit}
        handleClear={handleClear}
      />
      <Submission_data/>

    </div>
  );
}
