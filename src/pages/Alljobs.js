import React from "react";
function Alljobs() {
  return (
    <>
      <div className="container-fluid bg-light text-center py-5">
        <h1 className="h2 mb-3">FInd your next job</h1>
        <div class="input-group mb-3 w-50 m-auto">
          <input
            type="text"
            class="form-control"
            placeholder="Job title, Keyword or Company"
            aria-label="Recipient's username"
            aria-describedby="search-btn"
          />
          <input
            type="text"
            class="form-control"
            placeholder="City or Postcode"
            aria-label="Recipient's username"
            aria-describedby="search-btn"
          />
          <button className="btn btn-primary" type="button" id="search-btn">
            Search Jobs
          </button>
        </div>
        <a className="link text-right">Browse Categories</a>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-4">
            <aside className="bg-light p-3">
              <h3 className="h4">Filter</h3>
              <label htmlFor="keyword" className="form-label">
                Keyword
              </label>
              <input
                type="text"
                className="form-control mb-3"
                id="keyword"
                aria-describedby="keyword"
                placeholder="Title, Company"
              />
              <label htmlFor="jobcat" className="form-label">
                Job Category
              </label>
              <select
                className="form-select mb-3"
                aria-label="Select for number of employee"
              >
                <option selected>All Categories</option>
                <option value="1">Design</option>
                <option value="2">Development</option>
                <option value="3">SEO</option>
                <option value="3">Marketing</option>
              </select>
              <label htmlFor="jobtype" className="form-label">
                Job Type
              </label>
              <select
                className="form-select mb-3"
                aria-label="Select for number of employee"
              >
                <option selected>All Jobs</option>
                <option value="1">Full Time</option>
                <option value="2">Part Time</option>
                <option value="3">Fixed Term</option>
              </select>
              <button type="submit" className="btn btn-primary">
                Apply Filter
              </button>
              <button type="reset" className="btn btn-secondary ms-2">
                Cancel
              </button>
            </aside>
          </div>
          <div className="col-sm-8">
            {/* START: List Item */}
            <div className="shadow p-3 mb-3 rounded-2">
              <h2 className="h5">Design Manager</h2>
              <span>NetSolutions</span>
              <p>Mohali, India</p>
              <ul>
                <li>
                  Confident communications skills are a must, as well as a keen
                  eye for detail.
                </li>
                <li>
                  You will be comfortable using CAD and enjoy learning on the
                  job.
                </li>
              </ul>
            </div>
            {/* END: List Item */}
            {/* START: List Item */}
            <div className="shadow p-3 mb-3 rounded-2">
              <h2 className="h3">Design Manager</h2>
              <span>NetSolutions</span>
              <p>Mohali, India</p>
              <ul>
                <li>
                  Confident communications skills are a must, as well as a keen
                  eye for detail.
                </li>
                <li>
                  You will be comfortable using CAD and enjoy learning on the
                  job.
                </li>
              </ul>
            </div>
            {/* END: List Item */}
            {/* START: List Item */}
            <div className="shadow p-3 mb-3 rounded-2">
              <h2 className="h3">Design Manager</h2>
              <span>NetSolutions</span>
              <p>Mohali, India</p>
              <ul>
                <li>
                  Confident communications skills are a must, as well as a keen
                  eye for detail.
                </li>
                <li>
                  You will be comfortable using CAD and enjoy learning on the
                  job.
                </li>
              </ul>
            </div>
            {/* END: List Item */}
            {/* START: List Item */}
            <div className="shadow p-3 mb-3 rounded-2">
              <h2 className="h3">Design Manager</h2>
              <span>NetSolutions</span>
              <p>Mohali, India</p>
              <ul>
                <li>
                  Confident communications skills are a must, as well as a keen
                  eye for detail.
                </li>
                <li>
                  You will be comfortable using CAD and enjoy learning on the
                  job.
                </li>
              </ul>
            </div>
            {/* END: List Item */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Alljobs;
