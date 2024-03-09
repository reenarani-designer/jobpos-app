import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function OtpSec() {
  return (
    <>
      <div className="bg-light p-5 text-left">
        <h2 className="h4">Enter verification code</h2>
        <form>
          <div className="mb-3 mt-3">
            <label htmlFor="phone" className="form-label">
             We have sent  OTP on your registered number
            </label>
            <div className="d-flex space-between">
            <input
              type="text"
              className="form-control ms-1"
              id="phone"
              name="phone"
            />
            <input
              type="text"
              className="form-control ms-1"
              id="phone"
              name="phone"
            />
            <input
              type="text"
              className="form-control ms-1"
              id="phone"
              name="phone"
            />
            <input
              type="text"
              className="form-control ms-1"
              id="phone"
              name="phone"
            />
            <input
              type="text"
              className="form-control ms-1"
              id="phone"
              name="phone"
            />
             <input
              type="text"
              className="form-control ms-1"
              id="phone"
              name="phone"
            />
            </div>
            
          </div>
          <button type="submit" className="btn btn-primary w-100">
          Verify
          </button>
        </form>
      </div>
    </>
  );
}
export default OtpSec;