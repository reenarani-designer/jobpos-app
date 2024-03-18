import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function LoginBlock(){
  const navigate = useNavigate();
  const GenerateOtp = () => {
    axios.post('http://112.196.98.174:3000/api/v1/register', {
      phone: phoneNumber
    })
    .then(function (response) {
      if(response.data.code===200){
        console.log(response.data);
      navigate("/otp", { state: {
        phoneNumber: phoneNumber
        }});
    }
    else{
      alert('unable to generate OTP');
    }
    })
    
    .catch(function (error) {
      alert('unable to generate OTP');
    });
  }
  const inputHandler = (e) => {
    setPhonenumber(e.target.value);
  }
 
  const [phoneNumber, setPhonenumber] = useState('');

    return(
        <div className="bg-light p-5 text-left">
        <h2 className="h4">Login/Signup</h2>
        <form>
          <div className="mb-3 mt-3">
            <label htmlFor="phone" className="form-label">
            Enter your phone number
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="Phone Number"
              name="phone" value={phoneNumber} onChange={inputHandler}
            />
          </div>
          <button type="button" onClick={GenerateOtp} className="btn btn-primary w-100">
          Send OTP
          </button>
        </form>
      </div>
    );
}
export default LoginBlock;