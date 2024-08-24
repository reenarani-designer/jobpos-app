import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import { sendHttpRequest } from "../../util/Common";
import { config } from "../../util/Configuration";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiStateAction } from "../../store/slices/UiState";
//import RecommondedJobs from "./Recommendedjobs";

const getClassForSkillBadge = (index) => {
  const skillClass = ["bg-success", "bg-warning", "bg-danger", "bg-info"];
  const className = skillClass[index % skillClass.length];
  return className;
};
function JobDetails() {
  const jobId = "";
  const { id } = useParams();
  const dispatcher = useDispatch();
  const [jobDetail, setJobDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getJobDetails();
  }, [id]);

  const getJobDetails = async () => {
    setIsLoading(true);
    const response = await sendHttpRequest(config.jobDetail + '/' + id, "GET", null, true);
    if (response.status !== 200) {
      let notificationData = {
        isNotification: true,
        message: response.message,
        notificationType: "FAILURE",
      };
      dispatcher(uiStateAction.setIsNotification(notificationData));
      return;
    }
    setJobDetails(response.data.data);
    setIsLoading(false);

  }

  const applyOnJob = () => {
    Swal.fire({
      title: "Apply For Job",
      text: "Your Details will be shared with the Employer. Are you sure want to apply for this Job?",
      icon: "question",
      cancelButtonText: "No",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        doApply();
      }
    });
  }

  const doApply = async () => {
    const response = await sendHttpRequest(config.applyJob + "/" + id, "POST", null, true);
    if (response.status !== 200) {
      Swal.fire("OOPs!", "Something went wrong, and we could not able to Apply on the job. Please try again later.", "error");
      return;
    }
    Swal.fire("Done!", "Applied on the job Successfully", "success");
  }

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
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-8">
            <h1 className="h2 mb-0">{jobDetail.job.title}</h1>
            <ul className="list-group mb-3">
              <li className="list-group-item border-0 p-0">{jobDetail.job.lineAddress}</li>
              <li className="list-group-item border-0 p-0">
                <span className="badge bg-secondary">Starts at ₹{jobDetail.job.price}9</span>{" "}
                {jobDetail.job.skills &&
                  jobDetail.job.skills.map((skill, index) => {
                    return (
                      <span
                        key={skill._id}
                        className={`badge me-2 ${getClassForSkillBadge(index)}`}
                      >
                        {skill.name}
                      </span>
                    );
                  })}
              </li>
            </ul>
            <p>
              {jobDetail.job.description}
            </p>

            {!jobDetail.isApplied && <button className="btn btn-primary" onClick={applyOnJob}>Apply Job</button>}
          </div>

          <div className="col-sm-4">
            <aside className=" bg-light p-4">
              { /*<RecommondedJobs></RecommondedJobs>*/}
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
export default JobDetails;
