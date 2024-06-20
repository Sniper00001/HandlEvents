import React, { useState } from "react";


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

export default function Cities() {
  const [countriesselect, setCountriesselect] = useState("");
  const [city, setcity] = useState([]);

  const handler = (event) => {
    const SelectCountryvalue = event.target.value;

    setCountriesselect(SelectCountryvalue);

    const getCitiesarray = countriesAndCities.find(
      (items) => items.country == SelectCountryvalue

    );
    

    if (setCountriesselect) {
      setcity(getCitiesarray.cities)
      
    } else {
      setcity([]);
    }
  };

  return (
    <>
    <div className="container mt-4">
  <div className="mb-3">
    <label htmlFor="select-country" className="form-label">Select the country</label>
    <select id="select-country" value={countriesselect} onChange={handler} className="form-select">
      <option>Select the country</option>
      {countriesAndCities.map((items) => (
        <option key={items.country} value={items.country}>
          {items.country}
        </option>
      ))}
    </select>
  </div>

  <div className="mb-3">
    <label htmlFor="select-cities" className="form-label">Select the cities</label>
    <select id="select-cities" className="form-select">
      <option>Select the cities</option>
      {city.map((sity) => (
        <option key={sity} value={sity}>{sity}</option>
      ))}
    </select>
  </div>
</div>

    </>
  );
}
