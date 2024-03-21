export const signIn = async (email, password) => {
  let temp = {
    accessToken: "",
    statusText: "",
  };
  try {
    const response = await fetch("https://localhost:7189/api/auth/signIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    let resData = await response.json();
    temp.accessToken = resData.accessToken;
    temp.statusText = resData.status;
  } catch {
    temp.statusText = "Sign in failed, please check your connection";
  }
  return temp;
};

export const signUp = async (username, email, password) => {
  console.log("sign up fetch started");

  const response = await fetch("https://localhost:7189/api/Auth/signUp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  }).catch((err) => {
    console.error(err);
  });

  if (!response.ok) {
    throw new Error("Sign-up failed");
  }

  var temp = await response.json();
  console.log(temp);

  return temp;
};
