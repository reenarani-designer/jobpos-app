import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function AdminLogin(){
    return(
        <div className="container">
         <div className="bg-light p-5 text-left w-50 mx-auto my-5">
        <h2 className="h4">Admin Login</h2>
        <form>
          <div className="mb-3 mt-3">
            <label htmlFor="phone" className="form-label">
            Enter your email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="abc@gmail.com"
              name="email"
            />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="phone" className="form-label">
            Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="********"
              name="password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
         Submit
          </button>
        </form>
      </div>
        </div>
    );
}
export default AdminLogin;