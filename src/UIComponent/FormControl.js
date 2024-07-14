import React from "react";
export const FormInput = ({ id, label, className, ...props }) => {
  return (
    <div className="mb-3 form-floating">
      <input
        id={id}
        className={`form-control form-input-custom ${className}`}
        {...props}
      />
      {label && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}
    </div>
  );
};

export const FormInputDefault = ({ id, label, className, ...props }) => {
  return (
    <div className="mb-3">
      {label && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`form-control form-input-custom ${className || ""}`}
        {...props}
      />
    </div>
  );
};

export const FormSelectBox = ({ id, label, options, className, ...props }) => {
  return (
    <div className="mb-3">
      {label && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}
      <select
        id={id}
        className={`form-control form-input-custom ${className || ""}`}
        {...props}
      >
        {options &&
          options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
    </div>
  );
};

export const CustomCheckBox = ({
  id,
  value,
  onChange,
  preSelectedList,
  label,
}) => {
  const isSelected =
    preSelectedList && preSelectedList.indexOf(value.toString()) > -1;

  return (
    <div className="ps-0 p-1 custom-checkbox">
      <div className="custom-checkbox-wrapper">
        <input
          type="checkbox"
          id={id}
          value={value}
          onChange={onChange}
          checked={isSelected}
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
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export const FormTextArea = ({ id, label, className, ...props }) => {
  return (
    <div className="form-floating mb-3">
      <textarea
        id={id}
        className={`form-control form-textarea-custom ${className || ""}`}
        {...props}
      ></textarea>
      {label && <label htmlFor={id}>{label}</label>}
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
