import React from "react";

const ratings = [
  {
    name: "serviceRating",
    label: "Please rate the quality of the service you received from your host.",
  },
  {
    name: "beverageQuality",
    label: "Please rate the quality of your beverage.",
  },
  { name: "cleanlinessRating", 
    label: "Was our restaurant clean?" },
  {
    name: "overallExperienceRating",
    label: "Please rate your overall dining experience.",
  },
];

const options = ["Excellent", "Good", "Fair", "Bad"];

const Aromatic_data = ({ handleEvent, userRegister,handleSubmit,handleClear }) => {
  return (
    <form onSubmit={handleSubmit} className="container mt-4 bg-dark text-light p-4 rounded">
  <div className="mb-3">
    <label htmlFor="firstname" className="form-label text-info">
      Enter your first name
    </label>
    <input
      type="text"
      className="form-control bg-secondary text-light border-0"
      id="firstname"
      name="firstname"
      value={userRegister.firstname}
      onChange={handleEvent}
      required
      placeholder="Your first Name"
    />
  </div>

  <div className="mb-3">
    <label htmlFor="lastname" className="form-label text-info">
      Enter your last name
    </label>
    <input
      type="text"
      className="form-control bg-secondary text-light border-0"
      id="lastname"
      name="lastname"
      value={userRegister.lastname}
      onChange={handleEvent}
      required
      placeholder="Your last Name"
    />
  </div>

  <div className="mb-3">
    <label htmlFor="email" className="form-label text-info">
      Enter your Email
    </label>
    <input
      type="email"
      className="form-control bg-secondary text-light border-0"
      id="email"
      name="email"
      value={userRegister.email}
      onChange={handleEvent}
      required
      placeholder="Your email"
    />
  </div>

  <div className="mb-3">
    <label htmlFor="number" className="form-label text-info">
      Enter your Number
    </label>
    <input
      type="number"
      className="form-control bg-secondary text-light border-0"
      id="number"
      name="number"
      value={userRegister.number}
      onChange={handleEvent}
      required
      placeholder="Your number"
    />
  </div>

  {ratings.map((rating, index) => {
    return (
      <div key={index} className="mb-3">
        <label className="form-label text-info">{rating.label}</label>
        <ul className="list-unstyled">
          {options.map((option, optionIndex) => {
            return (
              <li key={optionIndex} className="form-check">
                <input
                  type="radio"
                  className="form-check-input bg-dark"
                  id={`${rating.name}-${optionIndex + 1}`}
                  name={rating.name}
                  value={option}
                  onChange={handleEvent}
                  checked={userRegister[rating.name] === option}
                />
                <label
                  className="form-check-label text-light"
                  htmlFor={`${rating.name}-${optionIndex + 1}`}
                >
                  {option}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    );
  })}

  <div className="mb-3">
    <button type="submit" className="btn btn-info">
      Submit
    </button>
  </div>

  <div className="mb-3">
    <button type="button" className="btn btn-secondary" onClick={handleClear}>
      Clear
    </button>
  </div>
</form>

  );
};

export default Aromatic_data;
