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
    return redirect("/user");
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

export const sendHttpRequest = async (url, method, body, addAuthHeader) => {
  const token = getAccessToken();
  let finalResponse = {
    status: null,
    message: null,
    data: null,
  };
  let headers = {
    "Content-Type": "application/json",
  };

  if (addAuthHeader) {
    headers = { ...headers, Authorization: `Bearer ${token}` };
  }

  try {
    const response = await fetch(url, {
      method: method,
      headers: headers,
      body: body,
    });
    finalResponse.status = response.status;
    if (!response.ok) {
      const res = await response.json();
      throw new Error(
        res && res.message
          ? res.message
          : "Service Failed - " + response.statusText
      );
    }
    const res = await response.json();
    finalResponse.data = res;
  } catch (error) {
    finalResponse.message = error.message;
  } finally {
    return finalResponse;
  }
};

export const displayAddress = (details) => {
  return (
    <address>
      {details.location}, {details.lineAddress}, {details.city},{" "}
      {details.postCode} {details.state}, {details.country}
    </address>
  );
};

export const getClassForSkillBadge = (index) => {
  const skillClass = ["bg-success", "bg-warning", "bg-danger", "bg-info"];
  const className = skillClass[index % skillClass.length];
  return className;
};

export const displaySkills = (skills) => {
  return (
    <>
      {skills &&
        skills.map((skill, index) => {
          return (
            <span
              key={skill._id}
              className={`badge me-2 ${getClassForSkillBadge(index)}`}
            >
              {skill.name}
            </span>
          );
        })}
    </>
  );
};
