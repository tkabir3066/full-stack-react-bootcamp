import React, { useState } from "react";

const ControlledForm = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profession: "",
    gender: "",
  });
  const { firstName, lastName, email, profession, gender } = userData;
  const handleChange = (e) => {
    setUserData({
      //   firstName: e.target.value,
      //   lastName: e.target.value,
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };
  return (
    <div style={{ width: 600, margin: "0 auto" }}>
      <form action="" onSubmit={handleSubmit}>
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
          <label htmlFor="gender">Gender:</label>
          <input
            type="radio"
            name="gender"
            id="gender"
            checked={gender === "male"}
            value="male"
            onChange={handleChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            id="gender"
            checked={gender === "female"}
            value="female"
            onChange={handleChange}
          />
          Female
          <input
            type="radio"
            name="gender"
            id="gender"
            value="other"
            checked={gender === "other"}
            onChange={handleChange}
          />
          Other
        </div>

        <br />
        <div>
          <label htmlFor="profession">Profession:</label>

          <select
            name="profession"
            value={profession}
            id="profession"
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Option
            </option>
            <option value="webDeveloper">Web Developer</option>
            <option value="softwareDeveloper">Software Developer</option>
            <option value="dataScientist">Data Scientist</option>
            <option value="digitalMarketer">Digital Marketer</option>
          </select>
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ControlledForm;
