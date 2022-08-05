import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <div
      style={{
        backgroundImage: "url(./images/veg_img_5.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        height: "100%",
      }}
    >
      <div
        className=" d-flex flex-column overflow-auto"
        id="main"
        style={{
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
        }}
      >
        <Header isScrolled={isScrolled} />
        {children}
        <Footer isScrolled={isScrolled} />
      </div>
    </div>
  );
};

export default Layout;
