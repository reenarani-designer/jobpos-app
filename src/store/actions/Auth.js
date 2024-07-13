import { getAccessToken, getUserId, sendHttpRequest } from "../../util/Common";
import { authActions } from "../slices/Auth";
import { config } from "../../util/Configuration";

const sendRequest = async (dispatcher) => {
  const userId = getUserId(),
    token = getAccessToken();
  if (!token || !userId) {
    return null;
  }

  dispatcher(authActions.setIsLoading({ isLoading: true }));
  const response = await sendHttpRequest(
    config.userProfile + userId,
    "GET",
    null,
    true
  );
  const userInfo =
    response && response.status === 200 ? response.data.data : null;
  dispatcher(authActions.setIsLoading({ isLoading: false }));
  return userInfo;
};

export const getUser = () => {
  return async (dispatcher) => {
    const data = await sendRequest(dispatcher);
    if (!data) {
      localStorage.removeItem("jbToken");
    }
    dispatcher(authActions.login({ userData: data }));
  };
};
