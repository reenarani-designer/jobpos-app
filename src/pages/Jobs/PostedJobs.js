import React, { useEffect, useState } from "react";
import { sendHttpRequest } from "../../util/Common";
import { config } from "../../util/Configuration";
import { uiStateAction } from "../../store/slices/UiState";
import { useDispatch } from "react-redux";
import { JobCard } from "../../UIComponent/Cards";
import { Pagination } from "../../UIComponent/Pagination";
import Swal from "sweetalert2";
const PostedJobs = () => {
  const dispatcher = useDispatch();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    getJobsList();
  }, []);
  const getJobsList = async () => {
    const response = await sendHttpRequest(
      config.postedJobs,
      "GET",
      null,
      true
    );
    if (response.status !== 200) {
      let notificationData = {
        isNotification: true,
        message: response.message,
        notificationType: "FAILURE",
      };
      dispatcher(uiStateAction.setIsNotification(notificationData));
      return;
    }
    setJobs(response.data.data);
  };

  const deleteJob = async (jobId) => {
    Swal.fire({
      title: "Delete Job",
      text: "Are you sure want to delete this job.",
      icon: "question",
      cancelButtonText: "No",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        // Action to perform on confirm
        deleteAction();
      }
    });

    const deleteAction = async () => {
      const response = await sendHttpRequest(
        config.addJob + "/" + jobId+'121',
        "DELETE",
        null,
        true
      );
      if (response.status !== 200) {
        /*let notificationData = {
          isNotification: true,
          message: response.message,
          notificationType: "FAILURE",
        };
        dispatcher(uiStateAction.setIsNotification(notificationData));
        return;*/
        Swal.fire("OOPs!", "Something went wrong, and we could not delete the job. Please try again later.", "error");
        return;
      }
      Swal.fire("Deleted!", "Your job has been deleted.", "success");
      getJobsList(response.data.data);
    };
  };

  return (
    <>
      <div className="container-fluid bg-light text-center py-5">
        <h1 className="h2 mb-3">Job Dashboard</h1>
        <p>Below is the list of jobs that you have posted!</p>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-12">
            {jobs &&
              jobs.map((job) => {
                return (
                  <JobCard
                    jobDetails={job}
                    key={job._id}
                    showOwnerAction={true}
                    deleteJobAction={deleteJob}
                  />
                );
              })}
            <Pagination totalRecords={3} currentPage={2} pageLimit={10} />
          </div>
        </div>
      </div>
    </>
  );
};
export default PostedJobs;
