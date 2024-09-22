import React, { useEffect, useState } from "react";
import { getAccessToken } from "../../util/Common";
import { JobCard } from "../../UIComponent/Cards";
import { Pagination } from "../../UIComponent/Pagination";
import { config } from "../../util/Configuration";
import { useSelector } from "react-redux";
import { CustomCheckBox } from "../../UIComponent/FormControl";

function Alljobs() {
  const token = getAccessToken();
  const [jobs, setJobs] = useState([]);
  const [totalJobs, setTotalJobs] = useState(0);
  const skills = useSelector((state) => state.skills.skills);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const getJobListing = async () => {
    try {
      const params = new URLSearchParams();
      if (selectedSkills.length > 0)
        params.append("skills", selectedSkills.join(","));

      const url = `${config.jobSearch}?${params.toString()}`;
      const response = await fetch(url, {
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
  const filterJobs = (e) => {
    const value = e.target.value;
    const newSelectedSkills = selectedSkills.includes(value)
      ? selectedSkills.filter((skill) => skill !== value)
      : [...selectedSkills, value];
    setSelectedSkills(newSelectedSkills);
  };

  const resetSkills = () => {
    setSelectedSkills([]);
  };

  useEffect(() => {
    getJobListing();
  }, [selectedSkills]);

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
              <h3 className="h4">Skills</h3>
              <div className="d-inline-column mb-3">
                {skills &&
                  skills.map((skill) => (
                    <CustomCheckBox
                      key={skill._id}
                      label={skill.name}
                      id={skill._id}
                      value={skill._id}
                      onChange={filterJobs}
                      preSelectedList={selectedSkills}
                    />
                  ))}
              </div>
              <button
                type="reset"
                className="btn btn-secondary ms-2"
                onClick={resetSkills}
              >
                Clear
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
            <Pagination
              totalRecords={totalJobs}
              currentPage={1}
              pageLimit={10}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Alljobs;
