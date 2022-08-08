import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import profileReducer from "../features/profile/profileSlice";
import productReducer from "../features/product/productSlice";
import cartReducer from "../features/cart/cartSlice";
import favoriteReducer from "../features/favorite/favoriteSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    product: productReducer,
    favorite: favoriteReducer,
    cart: cartReducer,
  },
});
