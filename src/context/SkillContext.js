import { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";
export const SkillContext = createContext({
  skillList: [],
});
const SkillProvider = (props) => {
    const {credential, setIsLoading} = useContext(AuthContext);
  const [skills, setSkills] = useState([]);
  useEffect(() => {
   // setIsLoading(true);
    getSkills();
  }, []); 
  const getSkills = () => {
    axios
      .get("http://112.196.98.174:3000/api/v1/skill", {
        headers: { Authorization: `Bearer ${credential.acesstoken}` },
      })
      .then(function (response) {
        setSkills(response.data.data);
         //setIsLoading(false);
      })
      .catch(function (error) {
        alert("unable to get user details");
      //   setIsLoading(false);
      });
  };
  return (
    <SkillContext.Provider
      value={{
        skillList: skills,
      }}
    >
      {props.children}
    </SkillContext.Provider>
  );
};
export default SkillProvider;
