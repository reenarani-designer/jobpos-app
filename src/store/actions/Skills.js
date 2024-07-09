import { getAccessToken, getUserId } from "../../util/Common";
import { skillsAction } from "../slices/Skills";
import { config } from "../../util/Configuration";

const sendRequest = async (dispatcher) => {
  const token = getAccessToken();
  if (!token) {
    return [];
  }
  dispatcher(skillsAction.setIsLoading({ isLoading: true }));
  const response = await fetch(config.skills, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    return [];
  }
  const res = await response.json();
  dispatcher(skillsAction.setIsLoading({ isLoading: false }));
  return res.data;
};

export const getSkills = () => {
  return async (dispatcher) => {
    const data = await sendRequest(dispatcher);
    dispatcher(skillsAction.setSkills({ skills: data }));
  };
};
