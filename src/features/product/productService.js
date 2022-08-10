/* eslint-disable eqeqeq */
/* eslint-disable no-throw-literal */
import productDB from "../../db/productDB.json";
// import axios from "axios";

// const API_URL = "/api/users/";

const getProducts = async () => {
  let data = productDB;

  return data;
};

const getProductById = async (id) => {
  let data = productDB.find((val) => val.id == id);

  if (!data) throw { message: "Product not found" };

  return data;
};

const review = async (id, data) => {
  let products = productDB.find((val) => val.id == id);

  if (!products) throw { message: "Product not found" };

  products.reviews = [...products.reviews, data];

  return products;
};

const productService = {
  review,
  getProducts,
  getProductById,
};

export default productService;
