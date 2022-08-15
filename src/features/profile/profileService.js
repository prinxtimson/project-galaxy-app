/* eslint-disable no-throw-literal */
// import axios from "axios";

// const API_URL = "/api/users/";

const getProfile = async () => {
  const profile = JSON.parse(localStorage.getItem("profile"));

  if (!profile) {
    throw {
      message: "Profile not found.",
    };
  }

  return profile;
};

const updateProfile = async (data) => {
  let profile = JSON.parse(localStorage.getItem("profile"));
  profile = { ...profile, user: data };

  localStorage.setItem("profile", JSON.stringify(profile));
  sessionStorage.setItem(data.email, JSON.stringify(data));

  return profile;
};

const addCard = async (data) => {
  let profile = JSON.parse(localStorage.getItem("profile"));
  profile = { ...profile, cards: [...profile.cards, data] };

  localStorage.setItem("profile", JSON.stringify(profile));

  return profile;
};

const removeCard = async (data) => {
  let profile = JSON.parse(localStorage.getItem("profile"));
  let cards = profile.cards.filter((card) => card.id !== data.id);
  profile = { ...profile, cards: [...cards] };

  localStorage.setItem("profile", JSON.stringify(profile));

  return profile;
};

const addAddress = async (data) => {
  let profile = JSON.parse(localStorage.getItem("profile"));
  profile = { ...profile, addresses: [...profile.addresses, data] };

  localStorage.setItem("profile", JSON.stringify(profile));

  return profile;
};

const removeAddress = async (data) => {
  let profile = JSON.parse(localStorage.getItem("profile"));
  let addresses = profile.addresses.filter((card) => card.id !== data.id);
  profile = { ...profile, addresses: [...addresses] };

  localStorage.setItem("profile", JSON.stringify(profile));

  return profile;
};

const productService = {
  getProfile,
  updateProfile,
  addCard,
  removeCard,
  addAddress,
  removeAddress,
};

export default productService;
