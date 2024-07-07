import { getAccessToken, getUserId } from "../../util/Common";
import { authActions } from "../slices/Auth";
import { config } from "../../util/Configuration";

const sendRequest = async (dispatcher) => {
  const userId = getUserId(),
    token = getAccessToken();
  if (!token || !userId) {
    return null;
  }
  dispatcher(authActions.setIsLoading({ isLoading: true }));
  const response = await fetch(
    config.login + userId,
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
  dispatcher(authActions.setIsLoading({ isLoading: false }));
  return res.data;
};

export const getUser = () => {
  return async (dispatcher) => {
    const data = await sendRequest(dispatcher);
    dispatcher(authActions.login({ userData: data }));
  };
};
