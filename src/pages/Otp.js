import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import slide1 from "./slide1.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function OtpSec(props) {
  const locationData = useLocation();
  //  console.log(locationData.state.phoneNumber);
  const phoneNumber = locationData.state.phoneNumber;
  const [confirmOtp, setconfirmOtp] = useState("");
  const navigate = useNavigate();
  const verifyOtp = () => {
    //alert(confirmOtp);
    //alert(phoneNumber);
    axios
      .post("http://112.196.98.174:3000/api/v1/login", {
        phone: phoneNumber,
        otp: confirmOtp,
      })
      .then(function (response) {
        if (response.data.code === 200) {
        //  console.log(response.data);
          localStorage.setItem("jbcred", JSON.stringify({
            acesstoken: response.data.accessToken,
            uid: response.data.data._id,
          }));
          navigate("/alljobs", {
            state: {
              //phoneNumber: phoneNumber
            },
          });
        } else {
          alert("unable to generate OTP 1");
        }
      })
      .catch(function (error) {
        alert("unable to generate OTP 2");
      });
  };
  const inputHandler = (e) => {
    setconfirmOtp(e.target.value);
  };
  return (
    <>
      <div className="container pt-3 pb-3">
        <div className="row align-items-center">
          <div className="col-sm-6 text-center">
            <div className="p-5">
              <img src={slide1} alt="slide1" className="img-fluid" />
              <h1 className="h2">Find a perfect job march</h1>
              <p>
                Finding the right job can be a daunting task. But with JobPos,
                we've made it easy.
              </p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="bg-light p-5 text-left">
              <h2 className="h4">Enter verification code</h2>
              <form>
                <div className="mb-3 mt-3">
                  <label htmlFor="phone" className="form-label">
                    We have sent OTP on your registered number
                  </label>
                  <div className="d-flex space-between">
                    <input
                      type="text"
                      className="form-control ms-1"
                      id="otp"
                      name="otp"
                      value={confirmOtp}
                      onChange={inputHandler}
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={verifyOtp}
                  className="btn btn-primary w-100"
                >
                  Verify
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default OtpSec;
