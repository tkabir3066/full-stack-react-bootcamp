
import React, { useState } from "react";

const ControlledForm = () => {
  const [userData, setUserData] = useState({ firstName: " " });

  const handleChange = (e) => {
    console.log(e.target.value);
    setUserData({
      //   firstName: e.target.value,
      //   lastName: e.target.value,
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const { firstName, lastName, email, password } = userData;
  return (
    <div style={{ width: 600, margin: "0 auto" }}>
      <form action="">
        <div>
          <label htmlFor="firstName">FirstName: </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="lastName">lastName: </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={handleChange}
          />
        </div>

        <br />

        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
          />
        </div>

        <br />
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default ControlledForm;
