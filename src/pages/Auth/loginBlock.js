import React, { useEffect, useState } from "react";
import { Form, json, useNavigate, useActionData } from "react-router-dom";
import { validator, phoneRegex } from "../../validations/validator";
function LoginBlock() {
  const [phoneError, setPhoneError] = useState(null);
  const [isValidForm, setFormVaild] = useState(false);
  const actionData = useActionData();
  const navigate = useNavigate();
  useEffect(() => {
    if (actionData && actionData.otpGenerated) {
      navigate("/otp", {
        state: {
          phoneNumber: actionData.phoneNumber,
        },
      });
    }
  }, [actionData]);

  const inputHandler = (e) => {
    let errorMsg = "",
      formValid = true;
    if (!validator(phoneRegex, e.target.value)) {
      errorMsg = "Please enter a valid phone number";
      formValid = false;
    }
    setPhoneError(errorMsg);
    setFormVaild(formValid);
  };

  return (
    <div className="bg-light p-5 text-left">
      <h2 className="h4">Login/Signup</h2>
      <Form method="post">
        <div className="mb-3 mt-3">
          <label htmlFor="phone" className="form-label">
            Enter your phone number
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Phone Number"
            name="phone"
            onChange={inputHandler}
          />
          {phoneError && <small className="text-danger">{phoneError}</small>}
        </div>
        <button className="btn btn-primary w-100" disabled={!isValidForm}>
          Send OTP
        </button>
      </Form>
    </div>
  );
}
export default LoginBlock;

export const loginAction = async ({ request, param }) => {
  const formData = await request.formData();
  let phoneNumber = formData.get("phone");

  const response = await fetch("http://112.196.98.174:3000/api/v1/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ phone: phoneNumber }),
  });

  if (!response.ok) {
    throw json({ message: "Unable to generate the OTP" }, { status: 500 });
  }
  return json(
    { message: "OTP generated", otpGenerated: true, phoneNumber: phoneNumber },
    { status: 200 }
  );
};
