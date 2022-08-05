import { MdArrowUpward } from "react-icons/md";

const Footer = ({ isScrolled }) => {
  return (
    <div className="container">
      <div
        className={`position-absolute ${isScrolled ? "d-block" : "d-none"}`}
        style={{ bottom: 30, right: 30 }}
      >
        <button
          className="btn btn-dark rounded-circle"
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
