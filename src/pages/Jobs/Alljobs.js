import React, { useEffect, useState } from "react";
import { getAccessToken } from "../../util/Common";
import { JobCard } from "../../UIComponent/Cards";
import { Pagination } from "../../UIComponent/Pagination";
import { config } from "../../util/Configuration";

function Alljobs() {
  const token = getAccessToken();
  const [jobs, setJobs] = useState([]);
  const [totalJobs, setTotalJobs] = useState(0);

  const getJobListing = async () => {
    try {
      const response = await fetch(`${config.jobSearch}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch job listings");
      }

      const data = await response.json();
      setJobs(data.data.jobs);
      setTotalJobs(data.data.total);
    } catch (error) {
      console.error("Error fetching job listings:", error.message);
      setJobs([]);
      setTotalJobs(0);
      // Handle error display or notification to the user
    }
  };

  useEffect(() => {
    getJobListing();
  }, []);

  return (
    <>
      <div className="container-fluid bg-light text-center py-5">
        <h1 className="h2 mb-3">Find your next job</h1>
        <div className="input-group mb-3 w-50 m-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Search for service"
            aria-label="Search for service"
            aria-describedby="search-btn"
          />
          <input
            type="text"
            className="form-control"
            placeholder="City or Postcode"
            aria-label="City or Postcode"
            aria-describedby="search-btn"
          />
          <button className="btn btn-primary" type="button" id="search-btn">
            Search Jobs
          </button>
        </div>
        <a href="/" className="link text-right">
          Browse Categories
        </a>
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
              <select className="form-select mb-3" aria-label="Job Category">
                <option defaultValue={1}>All Categories</option>
                <option value={2}>Cleaning</option>
                <option value={3}>Plumber</option>
                <option value={4}>Electrician</option>
                <option value={5}>Carpenter</option>
                <option value={6}>Painting</option>
              </select>
              <label htmlFor="jobtype" className="form-label">
                Job Type
              </label>
              <select className="form-select mb-3" aria-label="Job Type">
                <option defaultValue={1}>All Jobs</option>
                <option value={2}>Full Time</option>
                <option value={3}>Part Time</option>
                <option value={4}>Fixed Term</option>
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
            {/* Job Listings */}
            {jobs.length > 0 ? (
              jobs.map((jobDetails) => (
                <JobCard key={jobDetails._id} jobDetails={jobDetails} />
              ))
            ) : (
              <p>No jobs found.</p>
            )}

            {/* Pagination */}
            <Pagination totalRecords={totalJobs} currentPage={1} pageLimit={10} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Alljobs;
