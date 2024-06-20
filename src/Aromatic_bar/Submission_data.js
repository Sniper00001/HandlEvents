import React, { useState, useEffect } from "react";

export default function Submission_data() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const subData = JSON.parse(localStorage.getItem("useRegister")) || [];
    setSubmissions(subData);
  }, []);

  const handleEraseData=()=>{
    localStorage.removeItem("useRegister");
    setSubmissions([]);
  }

  return (
    <div className="container mt-4">
  <h2 className="text-light mb-3">Submission List</h2>
  <p className="text-light">Total Entries: {submissions.length}</p>
  <button className="btn btn-danger mb-3" onClick={handleEraseData}>Erase All Data</button>

  <table className="table table-dark table-striped table-bordered">
    <thead className="thead-light">
      <tr>
        <th>Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Service Rating</th>
        <th>Beverage Quality</th>
        <th>Cleanliness Rating</th>
        <th>Overall Experience Rating</th>
      </tr>
    </thead>

    <tbody>
      {submissions.map((items, key) => {
        return (
          <tr key={key}>
            <td>{items.firstname}</td>
            <td>{items.lastname}</td>
            <td>{items.email}</td>
            <td>{items.number}</td>
            <td>{items.serviceRating}</td>
            <td>{items.beverageQuality}</td>
            <td>{items.cleanlinessRating}</td>
            <td>{items.overallExperienceRating}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
</div>


  );
}
