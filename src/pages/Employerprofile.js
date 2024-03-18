import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function EmployerProfile(){
    return(
        <>
          <div className="container p-5 my-5 bg-light">
        <h1>Employer Profile</h1>
        <form>
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
export default EmployerProfile;