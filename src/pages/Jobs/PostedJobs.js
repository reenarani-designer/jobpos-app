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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getJobsList();
  }, [currentPage]);

  const getJobsList = async () => {
    setIsLoading(true);
    const response = await sendHttpRequest(config.postedJobs, "GET", null, true);
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
    setJobs(response.data.data);
    setTotalRecords(response.data.totalRecords); // Assuming your API returns total records
  };

  const deleteJob = async (jobId) => {
    const deleteAction = async () => {
      const response = await sendHttpRequest(config.addJob + "/" + jobId, "DELETE", null, true);
      if (response.status !== 200) {
        Swal.fire("OOPs!", "Something went wrong, and we could not delete the job. Please try again later.", "error");
        return;
      }
      Swal.fire("Deleted!", "Your job has been deleted.", "success");
      getJobsList();
    };

    Swal.fire({
      title: "Delete Job",
      text: "Are you sure you want to delete this job?",
      icon: "question",
      cancelButtonText: "No",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteAction();
      }
    });
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
    <>
      <div className="container-fluid bg-light text-center py-5">
        <h1 className="h2 mb-3">Job Dashboard</h1>
        <p>Below is the list of jobs that you have posted!</p>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-12">
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <JobCard
                  jobDetails={job}
                  key={job._id}
                  showOwnerAction={true}
                  deleteJobAction={deleteJob}
                />
              ))
            ) : (
              <p>No jobs posted yet.</p>
            )}
            <Pagination
              totalRecords={totalRecords}
              currentPage={currentPage}
              pageLimit={10}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostedJobs;
