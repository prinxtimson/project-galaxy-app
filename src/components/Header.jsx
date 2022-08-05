/* eslint-disable jsx-a11y/anchor-is-valid */
import { BsPerson, BsCart3, BsCart2, BsPersonPlus } from "react-icons/bs";
import {
  MdLogout,
  MdOutlineLock,
  MdFavoriteBorder,
  MdHistory,
} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Header({ isScrolled }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

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
        <div className="navbar-brand flex-grow-1 ">
          <Link to="/">Blacky Restaurant</Link>
        </div>
        <div className="navbar-brand d-block d-lg-none">
          <ul className="d-flex py-1 mb-0">
            <li className="nav-item mx-1">
              <a href="#" role="button" className="nav-link">
                <BsCart3 size={30} />
              </a>
            </li>
            <li className="nav-item mx-1 dropdown">
              <a
                href="#"
                className="dropdown-toggle nav-link"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <BsPerson size={30} />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                style={{ zIndex: 2000 }}
              >
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
                      <Link className="dropdown-item" to="/order-history">
                        <MdHistory /> History
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
                      <Link className="dropdown-item" to="/order-history">
                        <MdHistory /> History
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
        <div className="d-none d-lg-block">
          <ul className="d-flex mb-0 py-1">
            <li className="nav-item mx-1">
              <a href="#" role="button" className="nav-link">
                <BsCart3 size={30} />
              </a>
            </li>
            <li className="nav-item mx-1 dropdown">
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
                      <Link className="dropdown-item" to="/order-history">
                        <MdHistory /> History
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
                      <Link className="dropdown-item" to="/order-history">
                        <MdHistory /> History
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
