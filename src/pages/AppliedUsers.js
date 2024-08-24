import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { uiStateAction } from "../store/slices/UiState";
import { displayAddress, displaySkills, sendHttpRequest } from "../util/Common";
import { config } from "../util/Configuration";
const AppliedUsers = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const dispatcher = useDispatch();
  const [appliedUsers, setAppliedUsers] = useState([]);
  const [jobDetails, setJobDetails] = useState(null);

  const getAppliedUsers = async () => {
    setIsLoading(true);
    const response = await sendHttpRequest(
      config.appliedUsers + "/" + id,
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
    setAppliedUsers(response.data.data.applyUsers);
    setJobDetails(response.data.data.job);
  };

  useEffect(() => {
    getAppliedUsers();
  }, []);
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
    <div className="container my-5">
      <h3 className="h4">
        Users Applied on job :{" "}
        <Link to={`/user/job/${jobDetails._id}`}>{jobDetails.title}</Link>
      </h3>
      {/* START: List Item */}
      {appliedUsers.map((userDetails) => {
        const skills = displaySkills(userDetails.userId.skills);
        const address = displayAddress(userDetails.userId);
        return (
          <div
            key={userDetails._id}
            className="d-flex justify-content-between border-top mb-2 mt-3 pt-2"
          >
            <div>
              <h2 className="h5">{userDetails.userId.name}</h2>
              {skills}
              {address}
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
                    Direct Message
                  </a>
                </li>
                <li>
                  <a className="dropdown-item border-bottom" href="#">
                    Accept
                  </a>
                </li>
                <li>
                  <a className="dropdown-item border-bottom" href="#">
                    Reject
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Delete
                  </a>
                </li>
              </ul>
            </div>
          </div>
        );
      })}

      {/* END: List Item */}
    </div>
  );
};
export default AppliedUsers;
