import { getAccessToken, getUserId } from "../../util/Common";
import { authActions } from "../slices/Auth";

const sendRequest = async () => {
  const userId = getUserId(),
    token = getAccessToken();
  if (!token || !userId) {
    return null;
  }

  const response = await fetch(
    `http://112.196.98.174:3000/api/v1/user/${userId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    return null;
  }
  const res = await response.json();
  return res.data;
};

export const getUser = () => {
  return async (dispatcher) => {
    const data = await sendRequest();
    dispatcher(authActions.login({ userData: data }));
  };
};
