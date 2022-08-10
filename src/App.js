import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./App.css";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Profile from "./pages/Profile";
import Favourite from "./pages/Favourite";
import Cart from "./pages/Cart";
import OrderHistory from "./pages/OrderHistory";
import ChangePassword from "./pages/ChangePassword";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import FoodMenu from "./pages/FoodMenu";
import SingleMenu from "./pages/SingleMenu";
import OurRestaurant from "./pages/OurRestaurant";
import PrivateEvents from "./pages/PrivateEvents";
import Reservation from "./pages/Reservation";
import OrderTracking from "./pages/OrderTracking";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Profile />} />
          <Route path="/favourites" element={<Favourite />} />
          <Route path="/menu" element={<FoodMenu />} />
          <Route path="/menu/:id" element={<SingleMenu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/our-restaurant" element={<OurRestaurant />} />
          <Route path="/private-events" element={<PrivateEvents />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
