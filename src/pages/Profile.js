import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function CreateProfile() {
  return (
    <>
      <div className="container p-5 my-5 bg-light">
        <h1>Create Profile</h1>
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
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              aria-describedby="address"
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
          <hr />
          <div>
            <input
              type="radio"
              className="btn-check"
              name="options-outlined"
              id="success-outlined"
              autoComplete="off"
              defaultChecked
            />
            <label
              className="btn btn-outline-primary"
              htmlFor="success-outlined"
            >
              Job Seeker
            </label>

            <input
              type="radio"
              className="btn-check"
              name="options-outlined"
              id="danger-outlined"
              autoComplete="off"
            />
            <label
              className="btn btn-outline-primary ms-2"
              htmlFor="danger-outlined"
            >
              Employer
            </label>
          </div>
          <hr />
          <div className="mb-3">
            <h3>Most Recent Work Experience</h3>
            <label htmlFor="jobtitle" className="form-label">
              Job Title
            </label>
            <input
              type="text"
              className="form-control"
              id="jobtitle"
              aria-describedby="jobtitle"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="company" className="form-label">
              Company
            </label>
            <input
              type="text"
              className="form-control"
              id="company"
              aria-describedby="company"
            />
            <a href="">Add More</a>
          </div>
          <hr />
          <div className="mb-3">
            <h3>Qualification</h3>
            <label htmlFor="studylevel" className="form-label">
              Level of Education
            </label>
            <input
              type="text"
              className="form-control"
              id="studylevel"
              aria-describedby="studylevel"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="studyfield" className="form-label">
              Field of Study
            </label>
            <input
              type="text"
              className="form-control"
              id="studyfield"
              aria-describedby="studyfield"
            />
            <a href="">Add More</a>
          </div>
          <hr />
          <div className="mb-3">
            <label htmlFor="resume" className="form-label">
              Resume
            </label>
            <input
              type="file"
              className="form-control"
              id="resume"
              aria-describedby="resume"
            />
          </div>
          <hr />
          <div className="mb-3">
            <h3>Job Preferences</h3>
            <label htmlFor="preferjob" className="form-label">
              Job Preferences
            </label>
            <input
              type="text"
              className="form-control"
              id="preferjob"
              aria-describedby="preferjob"
            />
          </div>
          <hr />
          <h3>Create an Employer Account</h3>
          <div className="row">
            <div className="col">
              <label htmlFor="efname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="efname"
                aria-describedby="efname"
              />
            </div>
            <div className="col">
              <label htmlFor="elname" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="elname"
                aria-describedby="elname"
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="companyname" className="form-label">
              Company Name
            </label>
            <input
              type="text"
              className="form-control"
              id="companyname"
              aria-describedby="companyname"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="employees" className="form-label">
              Company's Number of Employee
            </label>
            <select
              className="form-select"
              aria-label="Select for number of employee"
            >
              <option selected>Select an option</option>
              <option value="1">1-49</option>
              <option value="2">50-149</option>
              <option value="3">150-249</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="ephonenumber" className="form-label">
              Your Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="ephonenumber"
              aria-describedby="ephonenumber"
            />
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
export default CreateProfile;
