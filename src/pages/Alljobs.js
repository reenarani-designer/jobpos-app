import React from "react";
function Alljobs() {
  return (
    <>
      <div className="container-fluid bg-light text-center py-5">
        <h1 className="h2 mb-3">FInd your next job</h1>
        <div className="input-group mb-3 w-50 m-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Search for service"
            aria-label="Recipient's username"
            aria-describedby="search-btn"
          />
          <input
            type="text"
            className="form-control"
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
                placeholder="Search for service"
              />
              <label htmlFor="jobcat" className="form-label">
                Job Category
              </label>
              <select
                className="form-select mb-3"
                aria-label="Select for number of employee"
              >
                <option defaultValue={'1'} >All Categories</option>
                <option value="1">Cleaning</option>
                <option value="2">Plumber</option>
                <option value="3">Electrician</option>
                <option value="3">Carpenter</option>
                <option value="3">Painting</option>
              </select>
              <label htmlFor="jobtype" className="form-label">
                Job Type
              </label>
              <select
                className="form-select mb-3"
                aria-label="Select for number of employee"
              >
                <option defaultValue={'1'} >All Jobs</option>
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
              <h2 className="h5">Plumber</h2>
              <span className="badge bg-success">Water Tank</span>{" "}
              <span className="badge bg-warning">Tap & Mixer</span>{" "}
              <span className="badge bg-danger">Water Filter</span>
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
              <h2 className="h5">Electrician</h2>
              <span className="badge bg-secondary">AC Repair</span>{" "}
              <span className="badge bg-primary">Television</span>{" "}
              <span className="badge bg-danger">Washing Machine</span>
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
              <h2 className="h5">Plumber</h2>
              <span className="badge bg-success">Water Tank</span>{" "}
              <span className="badge bg-warning">Tap & Mixer</span>{" "}
              <span className="badge bg-danger">Water Filter</span>
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
              <h2 className="h5">Electrician</h2>
              <span className="badge bg-secondary">AC Repair</span>{" "}
              <span className="badge bg-primary">Television</span>{" "}
              <span className="badge bg-danger">Washing Machine</span>
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
            {/* START: Pagination */}
            <nav aria-label="Page navigation example" className="mt-5">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link">Previous</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
             {/* END: Pagination */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Alljobs;
