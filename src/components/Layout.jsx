const Layout = ({ children }) => {
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
        {children}
      </div>
    </div>
  );
};

export default Layout;
