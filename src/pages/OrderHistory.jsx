import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, reset } from "../features/cart/cartSlice";

import Layout from "../components/Layout";

const OrderHistory = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { isError, isSuccess, message } = useSelector((state) => state.cart);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      toast.success("food had been added to cart");
    }

    dispatch(reset());
  }, [isError, isSuccess, message, dispatch]);

  const onAddToCart = (items) => {
    items.map((data) => dispatch(addToCart(data)));
  };

  return (
    <Layout>
      <div className="glass container mt-5">
        <div className="mb-5">
          <h2>Order History</h2>
        </div>
        {user ? (
          <div className="">
            {HISTORY.length > 0 ? (
              HISTORY.map((val, ind) => (
                <div className="card my-5" key={ind}>
                  <div className="card-body mt-2">
                    <h5 className="card-title ms-4">{val.date}</h5>
                    <div className="my-4">
                      <ul className="ps-1">
                        {val.items.map((item, index) => (
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
                                  <div className="col-1">{item.qty}</div>
                                  <div className="col-1">X</div>
                                  <div className="col-8">{item.name}</div>
                                </div>
                              </div>
                              <div className="col-3">
                                <div>${(item.qty * item.price).toFixed(2)}</div>
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
                          $ {(val.total + val.delivery + val.vat).toFixed(2)}
                        </h4>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <div className="my-2">
                        <button
                          className="btn btn-success btn-lg"
                          onClick={() => onAddToCart(val.items)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <p>No favorite(s) available yet.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="" style={{ height: 450 }}>
            <div className="card">
              <div className="card-body">
                <p>
                  Please <Link to="/login">login</Link> or{" "}
                  <Link to="/register">register</Link> to view order history{" "}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default OrderHistory;

const HISTORY = [
  {
    date: "June 12th, 2022, 5:16 PM",
    total: 19.0,
    vat: 2.3,
    delivery: 5.0,
    items: [
      {
        id: 2,
        img: "/images/veg_img.jpg",
        name: "Vegetable Spring Roll",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae lacus in ligula faucibus convallis et sit amet nulla. In nec rhoncus quam.",
        price: 10.5,
        qty: 1,
        extras: [],
      },
      {
        id: 3,
        img: "/images/veg_img_3.jpg",
        name: "Coca Cola",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae lacus in ligula faucibus convallis et sit amet nulla. In nec rhoncus quam.",
        price: 5.0,
        qty: 1,
        extras: [],
      },
      {
        id: 5,
        img: "/images/veg_img_2.jpg",
        name: "Salad",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae lacus in ligula faucibus convallis et sit amet nulla. In nec rhoncus quam.",
        price: 3.5,
        qty: 2,
        extras: [],
      },
    ],
  },
  {
    date: "June 18th, 2022, 2:16PM",
    total: 45.0,
    vat: 4.3,
    delivery: 5.0,
    items: [
      {
        id: 1,
        img: "/images/veg_img_3.jpg",
        name: "Chicken Katsu Curry",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae lacus in ligula faucibus convallis et sit amet nulla. In nec rhoncus quam.",
        price: 26.0,
        qty: 2,
        extras: [],
      },
      {
        id: 7,
        img: "/images/veg_img_4.jpg",
        name: "Sweet & Sour Chicken",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae lacus in ligula faucibus convallis et sit amet nulla. In nec rhoncus quam.",
        price: 13.0,
        qty: 1,
        extras: [],
      },
      {
        id: 9,
        img: "/images/veg_img_6.jpg",
        name: "Orange & Lemongrass Ice Tea",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae lacus in ligula faucibus convallis et sit amet nulla. In nec rhoncus quam.",
        price: 6.5,
        qty: 1,
        extras: [],
      },
    ],
  },
];
