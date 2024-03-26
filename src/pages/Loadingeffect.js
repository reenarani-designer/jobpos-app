import React from "react";
import loadingimage from "./loading.webp";
function LoadingEffect() {
  return( <>
  <div className="loading_Container">
    <div className="loading_Effect">
    <img src={loadingimage} alt="Loading Image" />
        <h4>Please wait...</h4>
    </div>
  </div>
  </>
  );
}
export default LoadingEffect;
