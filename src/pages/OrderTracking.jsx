import { useEffect, useState } from "react";
import { GMap } from "primereact/gmap";
import { useRef } from "react";

import { loadGoogleMaps, removeGoogleMaps } from "../GoogleMaps";
import Layout from "../components/Layout";

const OrderTracking = () => {
  const [googleMapsReady, setGoogleMapsReady] = useState(false);
  const gmap = useRef(null);
  const options = {
    center: { lat: 36.890257, lng: 30.707417 },
    zoom: 12,
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
      <div className="glass container mt-5">
        <div className="mb-5">
          <h2>Order Tracking</h2>
        </div>

        <div className="">
          <div className="card my-5">
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
                          <div>${(item.quantity * item.price).toFixed(2)}</div>
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
                    $ {(Order.total + Order.delivery + Order.vat).toFixed(2)}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
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
