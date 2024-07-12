import React, { useState } from "react";
import {
  FormInput,
  CustomCheckBox,
  FormTextArea,
} from "../../UIComponent/FormControl";
import { useSelector } from "react-redux";
import { config } from "../../util/Configuration";
import { getAccessToken } from "../../util/Common";

const jobDefaultValues = {
  title: "",
  price: "",
  description: "",
  location: "",
  lineAddress: "",
  city: "",
  state: "",
  postCode: "",
  country: "",
  featured: true,
};

function AddJob() {
  const token = getAccessToken();
  const [jobDetails, setJobDetails] = useState(jobDefaultValues);
  var selectedSkills = [];
  const skills = useSelector((state) => state.skills.skills);
  const preSelectedList = [];

  const inputHandler = (e) => {
    let inputType = e.target.name;
    let inputValue = e.target.value;
    setJobDetails((prev) => {
      return { ...prev, [inputType]: inputValue };
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

  const updateDetails = async () => {
    console.log(selectedSkills);
    const response = await fetch(config.addJob, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token} `,
      },
      body: JSON.stringify({
        title: jobDetails.title,
        price: jobDetails.price,
        description: jobDetails.description,
        location: jobDetails.location,
        lineAddress: jobDetails.lineAddress,
        city: jobDetails.city,
        state: jobDetails.state,
        postCode: jobDetails.postCode,
        country: jobDetails.country,
        featured: false,
        skills: selectedSkills,
      }),
    });
    if (!response.ok) {
      //will add error alert here...
      return;
    }
  };

  return (
    <div className="container-fluid p-5 bg-light">
      <h3 className="custom-heading mb-3">Post a job</h3>
      <form name="employeedetails">
        <div className="row">
          <div className="col-12 col-md-7">
            <FormInput
              label="Title"
              type="text"
              id="title"
              value={jobDetails.title}
              name="title"
              onChange={inputHandler}
            />

            <FormInput
              label="Budget"
              type="number"
              id="price"
              value={jobDetails.price}
              name="price"
              onChange={inputHandler}
              min={0}
            />

            <FormTextArea
              label="Description"
              type="text"
              id="description"
              value={jobDetails.description}
              name="description"
              onChange={inputHandler}
            />

            <FormInput
              label="Location"
              type="text"
              id="location"
              value={jobDetails.location}
              name="location"
              onChange={inputHandler}
            />

            <FormInput
              label="Line Address"
              type="text"
              id="lineAddress"
              value={jobDetails.lineAddress}
              name="lineAddress"
              onChange={inputHandler}
            />
            <div className="row">
              <div className="col-12 col-md-6">
                <FormInput
                  label="City"
                  type="text"
                  id="city"
                  value={jobDetails.city}
                  name="city"
                  onChange={inputHandler}
                />
              </div>
              <div className="col-12 col-md-6">
                <FormInput
                  label="State"
                  type="text"
                  id="state"
                  value={jobDetails.state}
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
                  value={jobDetails.postCode}
                  name="postCode"
                  onChange={inputHandler}
                />
              </div>
              <div className="col-12 col-md-6">
                <FormInput
                  label="Country"
                  type="text"
                  id="country"
                  value={jobDetails.country}
                  name="country"
                  onChange={inputHandler}
                />
              </div>
            </div>
          </div>

          <div className="col-12 col-md-5">
            <div className="mb-3">
              <label htmlFor="skills" className="form-label">
                Select Required Skill(s) for this Job
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
  );
}
export default AddJob;
