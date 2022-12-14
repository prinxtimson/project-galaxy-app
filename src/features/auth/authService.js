/* eslint-disable no-throw-literal */
import axios from "axios";
import { v4 as uuid } from "uuid";

const API_URL = "/api/users/";

const register = async (userData) => {
  //const res = await axios.post(API_URL, userData);

  const isExist = sessionStorage.getItem(userData.email);

  if (isExist) throw { message: "User alreaady exist." };

  const id = uuid();

  sessionStorage.setItem(userData.email, JSON.stringify({ ...userData, id }));

  if (userData) {
    localStorage.setItem(
      "user",
      JSON.stringify({ user: userData, token: "HH2i93nind0303ndKLsidw2obZh0" })
    );
    localStorage.setItem(
      "profile",
      JSON.stringify({ user: userData, cards: [], addresses: [] })
    );
  }

  return { user: userData, token: "HH2i93nind0303ndKLsidw2obZh0" };
};

const logout = async () => {
  localStorage.removeItem("user");
  localStorage.removeItem("profile");
};

// const login = async (userData) => {
//   const res = await axios.post(API_URL, userData);

//   if (res.data) {
//     localStorage.setItem("user", JSON.stringify(res.data));
//   }

//   return res.data;
// };

const login = async (userData) => {
  const user = JSON.parse(sessionStorage.getItem(userData.email));

  if (!user || user.password !== userData.password) {
    throw {
      message:
        "Sorry, your login is invalid. Please re-enter your details carefully.",
    };
  }
  let newUser = { user, token: "HH2i93nind0303ndKLsidw2obZh0" };

  localStorage.setItem("user", JSON.stringify(newUser));
  localStorage.setItem(
    "profile",
    JSON.stringify({ user, cards: [], addresses: [] })
  );

  return newUser;
};

const forgotPass = async (email) => {
  const res = await axios.post(API_URL, email);

  return res.data;
};

const resetPass = async (data) => {
  const res = await axios.post(API_URL, data);

  return res.data;
};

const changePass = async (data) => {
  const res = await axios.post(API_URL, data);

  return res.data;
};

const authService = {
  register,
  logout,
  login,
  forgotPass,
  resetPass,
  changePass,
};

export default authService;
