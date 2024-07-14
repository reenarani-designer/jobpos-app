import React, { useEffect, useState } from "react";
import { Form, json, useNavigate, useActionData } from "react-router-dom";
import { validator, phoneRegex } from "../../validations/validator";
import { FormInput } from "../../UIComponent/FormControl";
import { config } from "../../util/Configuration";
import { sendHttpRequest } from "../../util/Common";
import { useDispatch } from "react-redux";
import { uiStateAction } from "../../store/slices/UiState";

function Login() {
  const [phoneError, setPhoneError] = useState(null);
  const [isValidForm, setFormValid] = useState(false);
  const actionData = useActionData();
  const navigate = useNavigate();
  const dispatcher = useDispatch();

  useEffect(() => {
    if (actionData && actionData.status === 200) {
      navigate("/otp", {
        state: {
          phoneNumber: actionData.phoneNumber,
        },
      });
    }
    if (actionData && actionData.status !== 200) {
      dispatcher(
        uiStateAction.setIsNotification({
          isNotification: true,
          message: actionData.message,
          notificationType: "FAILURE",
        })
      );
    }
  }, [actionData, navigate]);

  const inputHandler = (e) => {
    const { value } = e.target;
    let errorMsg = "";
    let formValid = true;

    if (!validator(phoneRegex, value)) {
      errorMsg = "Please enter a valid phone number";
      formValid = false;
    }
    setPhoneError(errorMsg);
    setFormValid(formValid);
  };

  return (
    <div className="bg-light p-5 text-left">
      <h2 className="h4">Login/Signup</h2>
      <Form method="post">
        <FormInput
          type="text"
          id="phone"
          placeholder="Phone Number"
          name="phone"
          label="Phone Number"
          onChange={inputHandler}
        />
        {phoneError && <small className="text-danger">{phoneError}</small>}
        <button className="btn btn-primary w-100" disabled={!isValidForm}>
          Send OTP
        </button>
      </Form>
    </div>
  );
}

export const loginAction = async ({ request }) => {
  const formData = await request.formData();
  let phoneNumber = formData.get("phone");

  const response = await sendHttpRequest(
    config.register,
    "POST",
    JSON.stringify({ phone: phoneNumber }),
    false
  );

  return json(
    { ...response, phoneNumber: phoneNumber },
    { status: response.status }
  );
};

export default Login;
