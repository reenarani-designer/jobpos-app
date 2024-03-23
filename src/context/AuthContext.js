import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const AuthContext = createContext({
  credential: null,
  setCredential: () => {},
});
const AuthProvider = (props) => {
  const [userCred, setUsercred] = useState(null);
  useEffect(() => {
    checkLogin();
  }, []);
  const checkLogin = () => {
    var jbcred = localStorage.getItem("jbcred");
    if (jbcred != null) {
      let details = JSON.parse(jbcred);
      // console.log(details);
      getUser(details);
    }
  };
  //console.log(userCred);
  const getUser = (detail) => {
    axios
      .get("http://112.196.98.174:3000/api/v1/user/" + detail.uid, {
        headers: { Authorization: `Bearer ${detail.acesstoken}` },
      })
      .then(function (response) {
        var userdetails = response.data.data;
        setUsercred({...userdetails});
      })
      .catch(function (error) {
        alert("unable to get user details");
      });
  };
  return (
    <AuthContext.Provider
      value={{ credential: userCred, setCredential: setUsercred }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
