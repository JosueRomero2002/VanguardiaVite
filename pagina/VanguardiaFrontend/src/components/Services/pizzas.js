import axios from "axios";

//=Functions=
//Login
//Create User
//Get user data
//verifyToken

export async function register(user, email, userPassword, imagepath) {
  console.log("PRUEBA TEMPORAL Services/Users.js");

  const options = {
    method: "POST",
    url: `${import.meta.env.VITE_SOME_KEY}/users/createUser`,
    data: {
      user,
      userPassword,
      email,
      imagepath,
    },
    withCredentials: true,
  };
  const response = await axios.request(options);

  return response.data;
}

export async function login(email, password) {
  const options = {
    method: "POST",
    url: `${import.meta.env.VITE_SOME_KEY}/users/login`,
    data: {
      email,
      password,
    },

    withCredentials: true,
  };
  const response = await axios.request(options);

  return response.data;
}

export async function verifytoken(token) {
  const options = {
    method: "GET",
    url: `${import.meta.env.VITE_SOME_KEY}/users/verify/${token}`,

    withCredentials: true,
  };
  const response = await axios.request(options);

  return response.data;
}
