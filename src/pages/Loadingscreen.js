import React, {useEffect, useState} from "react";
import LoadingEffect from "./Loadingeffect";
function LoadingScreen() {
    const[isLoading, setIsloading] = useState(true);
 useEffect(() => {
  setTimeout(() => {
    setIsloading(false);
  }, 2000);
 }, []);
  // if (isLoading){
  //  <LoadingEffect></LoadingEffect>
  //  console.log(isLoading);
  // }
    return(
        <>
        <LoadingEffect></LoadingEffect>
        </>
    );
}
export default LoadingScreen;