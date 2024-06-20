import React from "react";

const Dataloader=({
    userRegistration,
    handleForm,
    handleEvent,
    handleEventCountries,
    countriesAndCities,
    cities,
    clearButton,
})=> {
    return(
        <>
        <form onSubmit={handleForm} className="p-4 border rounded">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Enter your Full name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={userRegistration.name}
            placeholder="Enter name"
            onChange={handleEvent}
            id="name"
            autoComplete="name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Enter your Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={userRegistration.email}
            placeholder="Enter Email"
            onChange={handleEvent}
            id="email"
            autoComplete="email"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="number" className="form-label">Enter your number</label>
          <input
            type="tel"
            className="form-control"
            name="number"
            value={userRegistration.number}
            placeholder="Enter number"
            onChange={handleEvent}
            id="number"
            autoComplete="number"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Enter your password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={userRegistration.password}
            placeholder="Enter password"
            onChange={handleEvent}
            id="password"
            autoComplete="password"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="select-countries" className="form-label">Select your country</label>
          <select
            id="select-countries"
            className="form-select"
            name="country"
            value={userRegistration.country}
            onChange={handleEventCountries}
          >
            <option>Select your country</option>
            {countriesAndCities.map((item) => (
              <option key={item.country} value={item.country}>
                {item.country}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="select-city" className="form-label">Select your city</label>
          <select
            id="select-city"
            className="form-select"
            name="city"
            value={userRegistration.city}
            onChange={handleEvent}
          >
            <option>Select your city</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>

        <div className="mb-3">
          <button type="button" className="btn btn-secondary" onClick={clearButton}>
            Clear
          </button>
        </div>
      </form>
        </>
    )
}

export default Dataloader