import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Auth/Login";
function HomeSec() {
  return (
    <>
      <div className="container pt-3 pb-3">
        <div className="row align-items-center">
          <div className="col-12  col-md-6 text-center">
            <div className="p-5">
              <img src="./slide1.png" alt="slide1" className="img-fluid" />
              <h1 className="h2">Find a perfect job march</h1>
              <p>
                Finding the right job can be a daunting task. But with JobPos,
                we've made it easy.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <Login />
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeSec;
