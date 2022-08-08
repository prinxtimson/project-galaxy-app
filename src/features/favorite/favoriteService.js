/* eslint-disable no-throw-literal */
// import axios from "axios";

// const API_URL = "/api/users/";

const addOrRemove = async (data) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user)
    throw {
      message: "You must login or create an account to add food to favorite",
    };

  return data;
};

const favoriteService = {
  addOrRemove,
};

export default favoriteService;
