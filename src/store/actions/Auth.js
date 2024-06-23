import { jwtDecode } from "jwt-decode";
import { authActions } from "../slices/Auth";

export const getUser = () => {
  return async (dispatcher) => {
    const jbToken = localStorage.getItem("jbToken");
    const sendRequest = async () => {
      const tokenData = jwtDecode(jbToken);
      const response = await fetch(
        `http://112.196.98.174:3000/api/v1/user/${tokenData._id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jbToken}`,
          },
        }
      );
      if (!response.ok) {
        return null;
      }
      const userData = await response.json();
      return userData.data;
    };
    if (jbToken) {
      const data = await sendRequest();
      console.log('will displatch data')
      dispatcher(authActions.login({ userData: data }));
    }
  };
};
