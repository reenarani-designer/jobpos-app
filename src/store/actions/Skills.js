import { getAccessToken, getUserId, sendHttpRequest } from "../../util/Common";
import { skillsAction } from "../slices/Skills";
import { config } from "../../util/Configuration";

const sendRequest = async (dispatcher) => {
  const token = getAccessToken();
  if (!token) {
    return [];
  }
  dispatcher(skillsAction.setIsLoading({ isLoading: true }));
  const response = await sendHttpRequest(config.skills, "GET", null, true);
  const skills =
    response && response.status === 200 ? response.data.data : null;
  dispatcher(skillsAction.setIsLoading({ isLoading: false }));
  return skills;
};

export const getSkills = () => {
  return async (dispatcher) => {
    const data = await sendRequest(dispatcher);
    dispatcher(skillsAction.setSkills({ skills: data }));
  };
};
