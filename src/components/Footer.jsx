import { Link } from "react-router-dom";
import { MdArrowUpward } from "react-icons/md";

const Footer = ({ isScrolled }) => {
  return (
    <div className="mt-4 bg-dark text-white p-4">
      <div className="py-2 py-md-4"></div>
      <div className="row mt-5 container mx-auto">
        <div className="col-12 col-md-4 d-flex align-items-center flex-column mb-4">
          <Link to="/">
            <img
              src="/blacky_logo.jpg"
              height={120}
              alt="Blacky Restaurant Logo"
            />
          </Link>
          <h2 className="text-white text-center mt-3">Blacky Restaurant</h2>
        </div>
        <div className="col-12 col-md-4 mb-4">
          <div className="mb-2 border-bottom">
            <h3>Contact Us</h3>
          </div>
          <div className="mb-2">
            <h6 className="mb-0">Main Address:</h6>
            <p>Cromwell Rd, South Kensington, London SW7 5BD</p>
          </div>
          <div className="mb-2">
            <h6 className="mb-0">Telephone:</h6>
            <p>
              <a className="text-white" href="tel:+01234567891">
                01234567891
              </a>
            </p>
          </div>
          <div className="mb-2">
            <h6 className="mb-0">Email:</h6>
            <p>
              <a
                className="text-white"
                href="mailto:Blackysrestaurant@gmail.com"
              >
                Blackysrestaurant@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="mb-2 border-bottom">
            <h3>Links</h3>
          </div>
          <ul className="ps-3">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/our-restaurant">
                Our Restaurant
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu">
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reservation">
                Reservation
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/private-events">
                Private Event
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`position-fixed ${isScrolled ? "d-block" : "d-none"}`}
        style={{ bottom: 30, right: 30 }}
      >
        <button
          className="btn btn-secondary rounded-circle"
          onClick={() => {
            const root = document.getElementById("main");

            root.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          <MdArrowUpward />
        </button>
      </div>
    </div>
  );
};

export default Footer;
