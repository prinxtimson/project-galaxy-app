import { useEffect } from "react";

import Layout from "../components/Layout";

const FAVOURITES = [
  {
    img: "./images/veg_img_2.jpg",
    name: "Stir Fry Prawn Noodles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae lacus in ligula faucibus convallis et sit amet nulla. In nec rhoncus quam.",
    price: "£10.00",
  },
  {
    img: "./images/veg_img.jpg",
    name: "Beef with Garlic",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae lacus in ligula faucibus convallis et sit amet nulla. In nec rhoncus quam.",
    price: "£12.00",
  },
  {
    img: "./images/veg_img_4.jpg",
    name: "Chicken Katsu Curry",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae lacus in ligula faucibus convallis et sit amet nulla. In nec rhoncus quam.",
    price: "£22.00",
  },
  {
    img: "./images/veg_img_6.jpg",
    name: "Sweet & Sour Chicken",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae lacus in ligula faucibus convallis et sit amet nulla. In nec rhoncus quam.",
    price: "£14.00",
  },
];

const Favourite = () => {
  useEffect(() => {}, []);

  return (
    <Layout>
      <div className="container mt-5">
        <div className="mb-5">
          <h2>My Favourites</h2>
        </div>
        <div className="">
          <div className="row">
            {FAVOURITES.map((val, ind) => (
              <div key={ind} className="col-sm-12 col-md-6 col-lg-4 mb-4">
                <div className="card">
                  <img
                    src={val.img}
                    style={{ height: 200, width: "100%" }}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{val.name}</h5>
                    <p className="card-text">{val.description}</p>
                    <p className="card-text">
                      <small className="text-muted">{val.price}</small>
                    </p>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-primary">Add to Cart</button>
                      <button className="btn btn-outline-danger">
                        Delete Favourite
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Favourite;
