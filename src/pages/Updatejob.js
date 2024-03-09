import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function UpdateJob() {
  return (
    <>
      <div className="container p-5 my-5 bg-light">
        <h1>Update job</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="jobtitle" className="form-label">
              Job Title
            </label>
            <input
              type="text"
              className="form-control"
              id="jobtitle"
              aria-describedby="jobtitle"
              value="PHP Developer"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="text"
              className="form-control"
              id="price"
              aria-describedby="price"
              value="2000/-"
            />
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
              value="India"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lineaddress" className="form-label">
              Line Address
            </label>
            <input
              type="text"
              className="form-control"
              id="lineaddress"
              aria-describedby="lineaddress"
              value="Mullana, Ambala"
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
              value="Ambala"
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
              value="Haryana"
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
              value="133203"
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
              value="India"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="jobtype" className="form-label">
              Skills
            </label>
            <select className="form-select ms-2" aria-label="Skills" multiple>
              <option value="1" selected>
                PHP
              </option>
              <option value="2">HTML</option>
              <option value="3" selected>
                CSS
              </option>
              <option value="3">Photoshop</option>
              <option value="3">jQuery</option>
              <option value="3">Reactjs</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="jobdesc" className="form-label">
              Job Description
            </label>
            <textarea
              class="form-control"
              aria-label="jobdesc"
              rows="4"
              value="This is default description"
            ></textarea>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Update Job
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
export default UpdateJob;
