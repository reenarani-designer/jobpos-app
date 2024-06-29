import { redirect } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export const getAccessToken = () => {
  const jbToken = localStorage.getItem("jbToken");
  return jbToken ? jbToken : null;
};

export const gotoUnauthPage = () => {
  if (!getAccessToken()) {
    return redirect("/");
  }
  return null;
};

export const gotoEmployeePage = () => {
  if (getAccessToken()) {
    return redirect("/employee");
  }
  return null;
};

export const getUserId = () => {
  const jbToken = getAccessToken();
  if (!jbToken) {
    return null;
  }
  const tokenData = jwtDecode(jbToken);
  if (!tokenData._id) {
    return null;
  }
  return tokenData._id;
};
