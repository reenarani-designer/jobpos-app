import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext({
  credential: null,
  setCredential: () => {},
});
const AuthProvider = (props) => {
  const [credential, setCredential] = useState(null);
  useEffect(() => {checkLogin()}, []);
  const checkLogin = () => {
    console.log(localStorage.getItem("jbcred"));
    // localStorage
    //   .getItem("jbcred")
    //   .then((result) => {console.log(result);})
    //   .catch((error) => {});
  };
  return (
    <AuthContext.Provider
      value={{ credential: credential, setCredential: setCredential }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
