import React, { useState, useEffect } from "react";
import Dataloader from "./Form_data";

const countriesAndCities = [
  {
    country: "USA",
    cities: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"],
  },
  {
    country: "Canada",
    cities: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
  },
  {
    country: "Germany",
    cities: ["Berlin", "Munich", "Frankfurt", "Hamburg", "Cologne"],
  },
  {
    country: "Australia",
    cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
  },
  {
    country: "Japan",
    cities: ["Tokyo", "Osaka", "Kyoto", "Nagoya", "Sapporo"],
  },
];

export default function FormProject() {
  const [userRegistration, setUserRegistration] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    country: "",
    city: "",
  });

  const [cities, setCities] = useState([]);
  const [newRecord, setNewRecord]=useState([]);

  //this will handle the name, email, password, number etc.

  const handleEvent = (e) => {
    const { name, value } = e.target;
    setUserRegistration({ ...userRegistration, [name]: value });
  };

// this is for the countries and cities
  const handleEventCountries = (e) => {
    const { name, value } = e.target;
    setUserRegistration({ ...userRegistration, [name]: value });
    const getCitiesArray = countriesAndCities.find(
      (item) => item.country === value
    );
    if (getCitiesArray) {
      setCities(getCitiesArray.cities);
    } else {
      setCities([]);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    const newData = { ...userRegistration };
    setUserRegistration(newData);
    setNewRecord((previousData)=>([...previousData,newData]));
    console.log(newData);

    setUserRegistration({
      name: "",
      email: "",
      number: "",
      password: "",
      country: "",
      city: "",
    });
    setCities([]);
  };

  const clearButton = () => {
    setUserRegistration({
      name: "",
      email: "",
      number: "",
      password: "",
      country: "",
      city: "",
    });
    setCities([]);
  };

  return (
    <>
      <div>
        <Dataloader
          userRegistration={userRegistration}
          countriesAndCities={countriesAndCities}
          cities={cities}
          handleEvent={handleEvent}
          handleEventCountries={handleEventCountries}
          clearButton={clearButton}
          handleForm={handleForm}
        />
      </div>

      <div className="container mt-5">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>
            {newRecord.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>{item.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
