import axios from "axios";

const API_URL = "/api/users/";

const register = async (userData) => {
  const res = await axios.post(API_URL, userData);

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }

  return res.data;
};

const logout = async () => {
  localStorage.removeItem("user");
};

// const login = async (userData) => {
//   const res = await axios.post(API_URL, userData);

//   if (res.data) {
//     localStorage.setItem("user", JSON.stringify(res.data));
//   }

//   return res.data;
// };

const login = async (userData) => {
  return {
    user: {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "+774646256727",
      address: "",
    },
    token: "HH2i93nind0303ndKLsidw2obZh0",
  };
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
