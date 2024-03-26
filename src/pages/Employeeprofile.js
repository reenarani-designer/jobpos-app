import React, { useContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
const defaultValues = {
  name: "",
  email: "",
  phone: "",
  dob: "",
  userType: "",
  skills: "",
  location: "",
  lineAddress: "",
  street: "",
  city: "",
  state: "",
  postCode: "",
  country: "",
};
function EmployeeProfile(props) {
  const credential = useContext(AuthContext);
  var userDetail =
    credential.credential !== null ? credential.credential : defaultValues;
  //console.log(userDetail);
  const [profileDetails, setprofileDetails] = useState(
    credential.credential !== null ? credential.credential : defaultValues
  );
  console.log(credential.credential);
  console.log(profileDetails);
  const updateDetails = () => {
    axios
      .put(
        "http://112.196.98.174:3000/api/v1/user/" + credential.credential._id,
        {
          name: profileDetails.name,
          email: profileDetails.email,
          // phone: profileDetails.phone,
          dob: profileDetails.dob,
          userType: "worker",
          //skills: [profileDetails.skills],
          location: profileDetails.location,
          lineAddress: profileDetails.lineAddress,
          street: profileDetails.street,
          city: profileDetails.city,
          state: profileDetails.state,
          postCode: profileDetails.postCode,
          country: profileDetails.country,
        },
        {
          headers: {
            Authorization: `Bearer ${credential.credential.acesstoken}`,
          },
        }
      )
      .then(function (response) {
        if (response.data.code === 200) {
          // console.log(response.data);
        } else {
          alert("unable to generate OTP 1");
        }
      })
      .catch(function (error) {
        alert("unable to generate OTP 2");
      });
  };
  const inputHandler = (e) => {
    let inputType = e.target.name;
    let inputValue = e.target.value;
    setprofileDetails((prev) => {
      return {
        ...prev,
        [inputType]: inputValue,
      };
    });
    // console.log(profileDetails);
  };

  return (
    <>
      <div className="container p-5 my-5 bg-light">
        <h1>Job Seeker Profile</h1>
        <form>
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="uname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="uname"
                aria-describedby="uname"
                value={profileDetails.name}
                name="name"
                onChange={inputHandler}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="email"
              name="email"
              value={profileDetails.email}
              onChange={inputHandler}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phonenumber" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              className="form-control"
              id="phonenumber"
              aria-describedby="phonenumber"
              name="phone"
              value={profileDetails.phone}
              onChange={inputHandler}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dob" className="form-label">
              DOB
            </label>
            <input
              type="text"
              className="form-control"
              id="dob"
              aria-describedby="dob"
              name="dob"
              value={profileDetails.dob}
              onChange={inputHandler}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="occupation" className="form-label">
              Occupation
            </label>
            <input
              type="text"
              className="form-control"
              id="occupation"
              aria-describedby="occupation"
              name="userType"
              value={profileDetails.userType}
              onChange={inputHandler}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="skills" className="form-label">
              Skills
            </label>
            <input
              type="text"
              className="form-control"
              id="skills"
              aria-describedby="skills"
              name="skills"
              value={profileDetails.skills}
              onChange={inputHandler}
            />
          </div>

          {/* <div className="mb-3">
            <label htmlFor="skills" className="form-label">
              Skills
            </label>
            <select
              className="form-select"
              aria-label="Select for skills"
            >
              <option value={setSkills}>Select an option</option>
              <option value="1">Flexibility</option>
              <option value="2">Problem-solving skills</option>
            </select>
          </div> */}
          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              id="location"
              aria-describedby="location"
              name="location"
              value={profileDetails.location}
              onChange={inputHandler}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Line Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              aria-describedby="address"
              name="lineAddress"
              value={profileDetails.lineAddress}
              onChange={inputHandler}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="street" className="form-label">
              Street
            </label>
            <input
              type="text"
              className="form-control"
              id="street"
              aria-describedby="street"
              name="street"
              value={profileDetails.street}
              onChange={inputHandler}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              aria-describedby="city"
              name="city"
              value={profileDetails.city}
              onChange={inputHandler}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="state" className="form-label">
              State
            </label>
            <input
              type="text"
              className="form-control"
              id="state"
              aria-describedby="state"
              name="state"
              value={profileDetails.state}
              onChange={inputHandler}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="postcode" className="form-label">
              Postcode
            </label>
            <input
              type="text"
              className="form-control"
              id="postcode"
              aria-describedby="postcode"
              name="postCode"
              value={profileDetails.postCode}
              onChange={inputHandler}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="country" className="form-label">
              Country
            </label>
            <input
              type="text"
              className="form-control"
              id="country"
              aria-describedby="country"
              name="country"
              value={profileDetails.country}
              onChange={inputHandler}
            />
          </div>
          {/* <div className="mb-4">
            <label htmlFor="acctype" className="form-label">
              Account Type
            </label>
             <select
              className="form-select"
              aria-label="Select for acctype"
            >
              <option selected>Select an option</option>
              <option value="1">Jobseeker</option>
              <option value="2">Employer</option>
            </select> 
          </div>*/}
          <div>
            <button
              type="button"
              onClick={updateDetails}
              className="btn btn-primary"
            >
              Save
            </button>
            <button type="reset" className="btn btn-secondary ms-2">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default EmployeeProfile;
