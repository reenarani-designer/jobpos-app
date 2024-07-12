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

export const CustomCheckBox = (props) => {
  const isSelected =
    props.preSelectedList &&
    props.preSelectedList.indexOf(props.value.toString()) > -1
      ? true
      : false;

  return (
    <div className="ps-0 p-1 custom-checkbox">
      <div className="custom-checkbox-wrapper">
        <input
          type="checkbox"
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          defaultChecked={isSelected}
        />
        <svg viewBox="0 0 35.6 35.6">
          <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
          <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
          <polyline
            className="check"
            points="11.78 18.12 15.55 22.23 25.17 12.87"
          ></polyline>
        </svg>
      </div>
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

export const FormTextArea = (props) => {
  return (
    <div className="form-floating mb-3">
      <textarea 
        className="form-control form-textarea-custom"
        {...props}
      ></textarea>
      <label htmlFor={props.id}>{props.label}</label>
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
