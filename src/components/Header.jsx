/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import { BsPerson, BsCart3, BsCart2, BsPersonPlus } from "react-icons/bs";
import { MdLogout, MdOutlineLock, MdFavoriteBorder } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const root = document.getElementById("main");

    const onScrolled = () => {
      if (root.scrollTop >= 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    root.addEventListener("scroll", onScrolled);

    return () => root.removeEventListener("scroll", onScrolled);
  }, []);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header
      className={`navbar navbar-expand-lg sticky-top ${
        isScrolled ? "bg-white" : "bg-transparent"
      } `}
    >
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-brand">
          <Link to="/">Blacky Restaurant</Link>
        </div>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Reservation
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Private Event
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" role="button" className="nav-link">
                <BsCart3 size={30} />
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#"
                className="dropdown-toggle nav-link"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <BsPerson size={30} />
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                {user ? (
                  <>
                    <li>
                      <Link className="dropdown-item" to="/account">
                        <BsPerson /> My Account
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="dropdown-item" to="/dashboard">
                      <BsCart2 /> Dashboard
                      </Link>
                    </li> */}
                    <li>
                      <Link className="dropdown-item" to="/cart">
                        <BsCart2 /> View Cart
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/favourites">
                        <MdFavoriteBorder /> Favourites
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/change-password">
                        <MdOutlineLock /> Change Password
                      </Link>
                    </li>
                    <li>
                      <button className="btn dropdown-item" onClick={onLogout}>
                        <MdLogout /> Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link className="dropdown-item" to="/login">
                        <MdOutlineLock /> Login
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/register">
                        <BsPersonPlus /> Register
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/cart">
                        <BsCart2 /> View Cart
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/favourites">
                        <MdFavoriteBorder /> Favourites
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
