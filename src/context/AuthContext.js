import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const AuthContext = createContext({
  credential: null,
  setCredential: () => {},
  isLoading: true,
  setIsLoading: () => {},
  checkLogin: () => {},
});
const AuthProvider = (props) => {
  const [userCred, setUsercred] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    checkLogin();
  }, []);
  const checkLogin = () => {
    var jbcred = localStorage.getItem("jbcred");
    if (jbcred != null) {
      let details = JSON.parse(jbcred);
      getUser(details);
    } else {
      setIsLoading(false);
    }
  }; 
  const getUser = (detail) => {
    axios
      .get("http://112.196.98.174:3000/api/v1/user/" + detail.uid, {
        headers: { Authorization: `Bearer ${detail.acesstoken}` },
      })
      .then(function (response) {
        var userdetails = response.data.data;
        setUsercred({ ...userdetails, acesstoken: detail.acesstoken });
        setIsLoading(false);
      })
      .catch(function (error) {
        alert("unable to get user details");
        setIsLoading(false);
      });
  };
  return (
    <AuthContext.Provider
      value={{
        credential: userCred,
        setCredential: setUsercred,
        isLoading: isLoading,
        setIsLoading: setIsLoading,
        checkLogin: checkLogin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
