import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Carousel } from "primereact/carousel";

import Layout from "../components/Layout";
import { getProducts } from "../features/product/productSlice";

const Home = () => {
  const [filterProducts, setFilterProducts] = useState([]);
  const dispatch = useDispatch();
  const responsiveOptions = [
    {
      breakpoint: "860px",
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    //let _filterProducts = products.filter((val) => val.discount);
    setFilterProducts([...products]);
  }, [products]);

  const itemTemplate = (product) => {
    return (
      <div className=" m-2">
        <div className="card text-center " style={{ minHeight: 380 }}>
          <Link to={`/menu/${product.id}`} className="flex-grow-1">
            <img
              src={product.img}
              style={{ height: 200 }}
              className="card-img-top"
              alt="..."
            />
          </Link>
          <div className="card-body">
            <h5 className="card-title">
              <Link to={`/menu/${product.id}`}>{product.name}</Link>
            </h5>
            <p className="card-text">
              {product.discount ? (
                <div className="">
                  <small className="text-muted text-decoration-line-through pe-2">
                    £{product.price.toFixed(2)}
                  </small>
                  <small className="">£{product.discount.toFixed(2)}</small>
                </div>
              ) : (
                <small className="">£{product.price.toFixed(2)}</small>
              )}
            </p>
            <div className="d-flex justify-content-center">
              <Link to={`/menu/${product.id}`} className="btn btn-primary">
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <div className="vh-100" id="hero">
        <div
          id="blackyHeroSection"
          className="carousel slide h-100"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#blackyHeroSection"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#blackyHeroSection"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#blackyHeroSection"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner" style={{ height: 649 }}>
            <div
              className="carousel-item active"
              style={{
                backgroundImage: "url(/images/veg_img.jpg)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                height: "100%",
              }}
            >
              <div className="d-flex flex-column justify-content-center align-items-center h-100 bg-dark bg-opacity-50 text-white">
                <h1 className="mb-4">Blacky Restaurant</h1>
                <Link to="/menu" className="btn btn-lg btn-primary">
                  Order Now
                </Link>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{
                backgroundImage: "url(/images/veg_img_2.jpg)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                height: "100%",
              }}
            >
              <div className="d-flex flex-column justify-content-center align-items-center h-100 bg-dark bg-opacity-50 text-white">
                <h1 className="mb-4">Blacky Restaurant</h1>
                <Link to="/menu" className="btn btn-lg btn-primary">
                  Order Now
                </Link>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{
                backgroundImage: "url(/images/veg_img_3.jpg)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                height: "100%",
              }}
            >
              <div className="d-flex flex-column justify-content-center align-items-center h-100 bg-dark bg-opacity-50 text-white">
                <h1 className="mb-4">Blacky Restaurant</h1>
                <Link to="/menu" className="btn btn-lg btn-primary">
                  Order Now
                </Link>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#blackyHeroSection"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#blackyHeroSection"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="p-4" style={{ backgroundColor: "#717744" }}>
        <div className="my-5">
          <h3 className="text-center text-white">Trending Food</h3>
        </div>
        <div className="">
          <Carousel
            value={filterProducts}
            itemTemplate={itemTemplate}
            responsiveOptions={responsiveOptions}
            numVisible={3}
            numScroll={1}
            circular
          ></Carousel>
        </div>
      </div>

      <div className="container flex-grow-1 mt-5">
        <div className="h-100 d-flex justify-content-center align-items-center flex-column bg-white">
          <div className="w-100">
            <div className="bg-white p-3 mx-md-4 mt-5">
              <h2>Loyalty Points</h2>
              <p className="mb-0">For every $10.00 spent, you earn 1 point.</p>
              <p>You can always use this point to get something on our menu</p>
            </div>
          </div>
          <div className="mb-5 mx-md-4 p-3">
            <div className="">
              <h2>Our Strory</h2>
            </div>
            <div className="">
              <p>
                Started on July 12th 2000, Blackys was started in Mama D's
                Kitchen and has been a staple in the community ever since.
                Providing exceptional Asian cuisine to as many customers as
                possible has always been our goal and this is just another step
                in our master plan!
              </p>
              <p>So without further ado..</p>
              <p>Tastebuds at the Ready!!</p>
            </div>
          </div>
          <div className="position-relative">
            <img src="/images/veg_img_6.jpg" alt="" style={{ width: "100%" }} />
            <div className="position-absolute top-0 h-100 w-100 bg-dark bg-opacity-50 text-white">
              <div className="d-flex align-items-center justify-content-center h-100">
                <Link to="/menu" className="btn btn-lg btn-primary ">
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
