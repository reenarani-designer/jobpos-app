import React from "react";
export const FormInput = (props) => {
  return (
    <div className="mb-3 form-floating">
      <input {...props} className="form-control form-input-custom" />
      {props.label && (
        <label htmlFor={props.id} className="form-label">
          {props.label}
        </label>
      )}
    </div>
  );
};
export const FormInputDefault = (props) => {
  return (
    <div className="mb-3">
      {props.label && (
        <label htmlFor={props.id} className="form-label">
          {props.label}
        </label>
      )}
      <input {...props} className="form-control form-input-custom" />
    </div>
  );
};

export const FormSelectBox = (props) => {
  return (
    <div className="mb-3">
      {props.label && (
        <label htmlFor={props.id} className="form-label">
          {props.label}
        </label>
      )}
      <input {...props} className="form-control form-input-custom" />
    </div>
  );
};

function CustomButton() {
  return (
    <>
      <button className="custom_btn">Default Value</button>
    </>
  );
}
export default CustomButton;
