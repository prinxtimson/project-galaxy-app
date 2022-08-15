import { useEffect, useState, useRef } from "react";
import { GMap } from "primereact/gmap";

import { loadGoogleMaps, removeGoogleMaps } from "../GoogleMaps";
import Layout from "../components/Layout";

const OrderTracking = () => {
  const [googleMapsReady, setGoogleMapsReady] = useState(false);
  const gmap = useRef(null);
  const options = {
    center: { lat: 36.890257, lng: 30.707417 },
    zoom: 12,
  };

  const onChangeText = (e) => {
    // const newProducts = products.filter((prod) => {
    //   const { name, description } = prod;
    //   const prodData = `${name.toUpperCase()} ${description.toUpperCase()}`;
    //   const searchQuery = e.target.value.toUpperCase();
    //   return prodData.indexOf(searchQuery) > -1;
    // });
    // setResult(newProducts);
  };

  useEffect(() => {
    loadGoogleMaps(() => {
      setGoogleMapsReady(true);
    });

    return () => {
      removeGoogleMaps();
    };
  }, []);

  return (
    <Layout>
      <div className="glass container p-3 p-sm-8 mt-5">
        <div className="mb-5">
          <h2>Order Tracking</h2>
        </div>
        <div className="mb-3">
          <form
            className="d-flex"
            role="search"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="form-control form-control-lg me-2"
              type="search"
              placeholder="Tracking Number"
              aria-label="Search"
              onChange={onChangeText}
            />
            <button className="btn btn-success btn-lg" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="">
          <div className="card my-2">
            <div className="card-body mt-2">
              <h5 className="card-title ms-4">{Order.date}</h5>
              <div className="my-4">
                <ul className="ps-1">
                  {Order.items.map((item, index) => (
                    <li key={index} className="my-3">
                      <div className="row align-items-center">
                        <div className="  col-2 ">
                          <img
                            src={item.img}
                            style={{ width: 75, height: 75 }}
                            alt=""
                            className="rounded"
                          />
                        </div>
                        <div className=" col-7">
                          <div className="row">
                            <div className="col-1">{item.quantity}</div>
                            <div className="col-1">X</div>
                            <div className="col-8">{item.name}</div>
                          </div>
                        </div>
                        <div className="col-3">
                          <div>£{(item.quantity * item.price).toFixed(2)}</div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="row my-4">
                <div className="col-1 col-md-2"></div>
                <div className="col-7">
                  <h4>Total (Incl. VAT & Delivery)</h4>
                </div>
                <div className="col-3">
                  <h4>
                    £ {(Order.total + Order.delivery + Order.vat).toFixed(2)}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded my-5">
          {googleMapsReady && (
            <div className="">
              <GMap
                ref={gmap}
                options={options}
                style={{ width: "100%", minHeight: "320px" }}
              />
            </div>
          )}
        </div>

        <div className="my-3 ms-4">
          <h4>For enquiries please call:</h4>
          <div className="row" style={{ maxWidth: 450 }}>
            <h5 className="col-4">Telephone: </h5>
            <h5 className="col-6">
              <a href="tel:+01234567891">01234567891</a>
            </h5>
          </div>
        </div>
        <div className="mb-5 ms-4">
          <h4>Or send us mail:</h4>
          <div className="row" style={{ maxWidth: 450 }}>
            <h5 className="col-sm-4">E-mail: </h5>
            <h5 className="col-sm-6">
              <a href="mailto:blackysrestaurant@gmail.com">
                blackysrestaurant@gmail.com
              </a>
            </h5>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderTracking;

const Order = {
  date: "June 12th, 2022, 5:16 PM",
  total: 19.0,
  vat: 2.3,
  delivery: 5.0,
  items: [
    {
      img: "./images/veg_img.jpg",
      name: "Vegetable Spring Roll",
      price: 10.5,
      quantity: 1,
    },
    {
      img: "./images/veg_img_3.jpg",
      name: "Coca Cola",
      price: 5.0,
      quantity: 1,
    },
    {
      img: "./images/veg_img_2.jpg",
      name: "Salad",
      price: 3.5,
      quantity: 2,
    },
  ],
};
