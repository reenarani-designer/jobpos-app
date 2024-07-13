import React, { useContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import {
  FormInput,
  FormInputDefault,
  CustomCheckBox,
} from "../../UIComponent/FormControl";
import { config } from "../../util/Configuration";
import { getAccessToken, sendHttpRequest } from "../../util/Common";
import { uiStateAction } from "../../store/slices/UiState";

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  dob: "",
  userType: "",
  skills: "",
  location: "",
  lineAddress: "",
  street: "",
  city: "",
  state: "",
  postCode: "",
  country: "",
  _id: "",
};
function UserProfile(props) {
  const authData = useSelector((state) => state.auth);
  const { skillList } = [];
  const token = getAccessToken();
  const userDetail = authData.userData ? authData.userData : defaultValues;
  const [profileDetails, setprofileDetails] = useState(userDetail);
  const [userProfileURL, setUserProfileURL] = useState("");
  const skills = useSelector((state) => state.skills.skills);
  const dispatcher = useDispatch();

  let preSelectedList = profileDetails.skills.map((item) => item._id);
  var selectedSkills = preSelectedList;

  const inputFileHandler = (event) => {
    let file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserProfileURL(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const updateDetails = async () => {
    const request = JSON.stringify({
      name: profileDetails.name,
      email: profileDetails.email,
      dob: profileDetails.dob,
      userType: "worker",
      location: profileDetails.location,
      lineAddress: profileDetails.lineAddress,
      street: profileDetails.street,
      city: profileDetails.city,
      state: profileDetails.state,
      postCode: profileDetails.postCode,
      country: profileDetails.country,
      skills: selectedSkills,
    });
    let notificationData = {
      isNotification: true,
      message: "Profile Updated Successfully",
      notificationType: "SUCCESS",
    };
    const response = await sendHttpRequest(
      config.userProfile + profileDetails._id,
      "PUT",
      request,
      true
    );

    if (response.status === 200) {
      uploadUserImage();
    } else {
      notificationData.message = response.message;
      notificationData.notificationType = "FAILURE";
    }
    dispatcher(uiStateAction.setIsNotification(notificationData));
  };
  const uploadUserImage = async () => {
    if (!userProfileURL) {
      return;
    }
    let notificationData = {
      isNotification: true,
      message: "Profile Picture Uploaded Successfully",
      notificationType: "SUCCESS",
    };
    const response = await sendHttpRequest(
      config.userImage + profileDetails._id,
      "POST",
      JSON.stringify({
        base64image: userProfileURL,
      }),
      true
    );
    setUserProfileURL("");
    if (response.status !== 200) {
      notificationData.message = response.message;
      notificationData.notificationType = "FAILURE";
    }
    dispatcher(uiStateAction.setIsNotification(notificationData));
  };

  const inputHandler = (e) => {
    let inputType = e.target.name;
    let inputValue = e.target.value;
    setprofileDetails((prev) => {
      return {
        ...prev,
        [inputType]: inputValue,
      };
    });
  };

  const handleSkills = (e) => {
    if (e.target.checked) {
      selectedSkills.push(e.target.value);
    } else {
      const filteredItem = selectedSkills.filter(function (skill) {
        return skill !== e.target.value;
      });
      selectedSkills = filteredItem;
    }
  };

  function formatDate(dateString) {
    const d = new Date(dateString);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  return (
    <>
      <div className="container-fluid p-5 bg-light">
        <form name="employeedetails">
          <div className="row">
            <div className="col-12 col-md-7">
              <FormInput
                label="Name"
                type="text"
                id="uname"
                value={profileDetails.name}
                name="name"
                onChange={inputHandler}
              />

              <div className="row">
                <div className="col-12 col-md-6">
                  <FormInput
                    label="Email address"
                    type="email"
                    id="email"
                    value={profileDetails.email}
                    name="email"
                    onChange={inputHandler}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <FormInput
                    label="Phone"
                    type="tel"
                    id="phonenumber"
                    value={profileDetails.phone}
                    name="phone"
                    disabled
                  />
                </div>
              </div>

              <FormInput
                label="DOB(MM/DD/YYYY)"
                type="date"
                id="dob"
                value={formatDate(profileDetails.dob)}
                name="dob"
                max={formatDate(new Date())}
                onChange={inputHandler}
              />

              <FormInput
                label="Location"
                type="text"
                id="location"
                value={profileDetails.location}
                name="location"
                onChange={inputHandler}
              />

              <div className="row">
                <div className="col-12 col-md-6">
                  <FormInput
                    label="Line Address"
                    type="text"
                    id="lineAddress"
                    value={profileDetails.lineAddress}
                    name="lineAddress"
                    onChange={inputHandler}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <FormInput
                    label="Street"
                    type="text"
                    id="street"
                    value={profileDetails.street}
                    name="street"
                    onChange={inputHandler}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <FormInput
                    label="City"
                    type="text"
                    id="city"
                    value={profileDetails.city}
                    name="city"
                    onChange={inputHandler}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <FormInput
                    label="State"
                    type="text"
                    id="state"
                    value={profileDetails.state}
                    name="state"
                    onChange={inputHandler}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-md-6">
                  <FormInput
                    label="Postcode"
                    type="text"
                    id="postcode"
                    value={profileDetails.postCode}
                    name="postcode"
                    onChange={inputHandler}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <FormInput
                    label="Country"
                    type="text"
                    id="country"
                    value={profileDetails.country}
                    name="country"
                    onChange={inputHandler}
                  />
                </div>
              </div>
            </div>

            <div className="col-12 col-md-5">
              <FormInputDefault
                type="file"
                id="profileImage"
                name="profileImage"
                onChange={inputFileHandler}
              />

              <div className="mb-3">
                <label htmlFor="skills" className="form-label">
                  Select Your Skills{" "}
                  <small>
                    (Skills is required if you want to apply for a job)
                  </small>
                </label>
                <div className="d-inline-column mb-3">
                  {skills &&
                    skills.map((skill) => (
                      <CustomCheckBox
                        key={skill._id}
                        label={skill.name}
                        id={skill._id}
                        value={skill._id}
                        onChange={handleSkills}
                        preSelectedList={preSelectedList}
                      />
                    ))}
                </div>
              </div>
            </div>
            <div className="col-12">
              <button
                type="button"
                onClick={updateDetails}
                className="btn btn-primary"
              >
                Save Your Details
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default UserProfile;
