import { useDispatch } from "react-redux";
import { uiStateAction } from "../store/slices/UiState";
import { Link } from "react-router-dom";
import { displaySkills } from "../util/Common";

export const JobCard = (props) => {
  const shortDescription =
    props.jobDetails.description && props.jobDetails.description.length > 200
      ? props.jobDetails.description.substring(0, 200) + "..."
      : props.jobDetails.description;
  const skills = props.jobDetails.skills;
  const location = `${props.jobDetails.location}, ${props.jobDetails.lineAddress}, ${props.jobDetails.city}, ${props.jobDetails.state}`;
  const deleteJob = (e) => {
    e.preventDefault();
    props.deleteJobAction(props.jobDetails._id);
  };
  const skillsList = displaySkills(skills);
  return (
    <div className="shadow p-3 mb-3 rounded-2">
      <h2 className="h5">
        <Link to={`../job/${props.jobDetails._id}`}>
          {props.jobDetails.title}
        </Link>
      </h2>
      {skillsList}
      <p>{location}</p>
      <p>{shortDescription}</p>
      {props.showOwnerAction && (
        <div>
          <Link
            to={`/user/edit-job/${props.jobDetails._id}`}
            className="btn btn-link"
          >
            Edit
          </Link>
          <Link to="/" className="btn btn-link" onClick={deleteJob}>
            Delete
          </Link>
          <Link to={`/user/applied-users/${props.jobDetails._id}`}>Applied Users</Link>
        </div>
      )}
    </div>
  );
};

export const NotificationCard = ({
  showToast,
  message,
  type,
  isClosable = true,
}) => {
  const toastType = type === "FAILURE" ? "bg-danger" : "bg-primary";
  const dispatcher = useDispatch();
  const onCloseButtonClick = () => {
    dispatcher(
      uiStateAction.setIsNotification({
        isNotification: false,
        message: null,
        nonotificationType: null,
      })
    );
  };
  return (
    <div
      className={`toast toast-custom align-items-center text-white  border-0 ${
        showToast ? "show" : "hide"
      } ${toastType}`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-bs-delay="3000"
    >
      <div className="d-flex">
        <div className="toast-body">{message}</div>
        {isClosable && (
          <button
            type="button"
            className="btn-close btn-close-white me-2 m-auto"
            onClick={onCloseButtonClick}
          ></button>
        )}
      </div>
    </div>
  );
};
