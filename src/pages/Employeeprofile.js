import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function EmployeeProfile() {
  return (
    <>
      <div className="container p-5 my-5 bg-light">
        <h1>Job Seeker Profile</h1>
        <form>
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="fname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="fname"
                aria-describedby="firstname"
              />
            </div>
            <div className="col">
              <label htmlFor="lname" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lname"
                aria-describedby="firstname"
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="emailid" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="emailid"
              aria-describedby="emailid"
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
            />
          </div>
          <div className="mb-3">
            <label htmlFor="skills" className="form-label">
              Skills
            </label>
            <select
              className="form-select"
              aria-label="Select for skills"
            >
              <option selected>Select an option</option>
              <option value="1">Flexibility</option>
              <option value="2">Problem-solving skills</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              id="location"
              aria-describedby="location"
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
            />
          </div>
          <div className="mb-4">
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
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
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
