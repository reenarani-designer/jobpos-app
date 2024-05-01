import jwtDecode from "jwt-decode";

const checkLogin = () => {
  var jbcred = localStorage.getItem("jbcred");
  if (jbcred != null) {
    let details = JSON.parse(jbcred);
    getUser(details);
  } else {
    setIsLoading(false);
  }
};

const getUser = async (dispatcher) => {
  var jbToken = localStorage.getItem("jbToken");
  if (!jbToken) {
    //will set failure screnrio later
  }
  const tokenData = jwtDecode(jbToken);

  const response = await fetch(
    `http://112.196.98.174:3000/api/v1/user/${tokenData._id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${detail.acesstoken}`,
      },
    }
  );
  if (!response.ok) {
    //will update it later
  }
};
