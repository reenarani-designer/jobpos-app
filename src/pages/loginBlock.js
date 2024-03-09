import React from "react";
function LoginBlock(){
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
              name="phone"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
          Send OTP
          </button>
        </form>
      </div>
    );
}
export default LoginBlock;