import { redirect } from "react-router-dom";

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
