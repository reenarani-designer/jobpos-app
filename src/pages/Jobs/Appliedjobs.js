import React, { useEffect, useState } from "react";
import { sendHttpRequest } from "../../util/Common";
import { config } from "../../util/Configuration";
import { useDispatch } from "react-redux";
import { uiStateAction } from "../../store/slices/UiState";
import { Link } from "react-router-dom";
const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatcher = useDispatch();

  useEffect(() => {
    getAppliedJobs();
  }, []);

  const getAppliedJobs = async () => {
    setIsLoading(true);
    const response = await sendHttpRequest(
      config.appliedJobs,
      "GET",
      null,
      true
    );
    setIsLoading(false);
    if (response.status !== 200) {
      let notificationData = {
        isNotification: true,
        message: response.message,
        notificationType: "FAILURE",
      };
      dispatcher(uiStateAction.setIsNotification(notificationData));
      return;
    }
    setAppliedJobs(response.data.data);
  };

  if (isLoading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row">
        <h1>Applied Jobs</h1>
        <div className="col-sm-12">
          {/* START: List Item */}
          {appliedJobs &&
            appliedJobs.map((jobDetails) => {
              return (
                <div
                  key={jobDetails._id}
                  className="d-flex justify-content-between border-top pt-2 mb-2 mt-2"
                >
                  <div>
                    <h2 className="h5"><Link to={`../job/${jobDetails.jobId._id}`}>{jobDetails.jobId.title}</Link> </h2>
                    <span className="badge bg-secondary">Already Applied</span>
                    <p>{jobDetails.jobId.lineAddress}</p>
                  </div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-three-dots-vertical"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                      </svg>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item border-bottom" href="#">
                          View and Manage Details
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item border-bottom" href="#">
                          Archive
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item border-bottom" href="#">
                          Update Status
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Remove
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          {/* END: List Item */}
        </div>
      </div>
    </div>
  );
};
export default AppliedJobs;
