import { useState } from "react";
import { Link } from "react-router-dom";

import Layout from "../components/Layout";

const Payment = () => {
  const [order] = useState([
    {
      img: "./images/veg_img.jpg",
      name: "Vegetable Spring Roll",
      price: 10.5,
      qty: 1,
    },
    {
      img: "./images/veg_img_2.jpg",
      name: "Salad",
      price: 3.5,
      qty: 2,
    },
  ]);
  return (
    <Layout>
      <div className="container">
        <div className="mb-5">
          <h2>Checkout</h2>
        </div>
        <div className="row">
          <div className="col-12 col-md-8 ">
            <div className="bg-white p-5">
              <div className="">
                <div className="">
                  <div className="mb-2">
                    <h4>Order Summary</h4>
                  </div>
                  <div className="mb-3">
                    <h5>Items (1)</h5>

                    <ul className="ps-0">
                      {order.map((item, ind) => {
                        return (
                          <li key={ind} className="border-top ">
                            <div className="row align-items-center py-2">
                              <div className="col-2">
                                <img
                                  src={item.img}
                                  style={{ width: 55, height: 55 }}
                                  alt=""
                                  className="rounded"
                                />
                              </div>
                              <div className="col-4">{item.name}</div>
                              <div className="col-2">{`X ${item.qty}`}</div>
                              <div className="col-2 text-center">
                                ${item.price.toFixed(2)}
                              </div>
                              <div className="col-2 text-center">
                                ${(item.qty * item.price).toFixed(2)}
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <div className="d-flex justify-content-between">
                      <p className="">Sub Total</p>
                      <p className="">$124.00</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="">Delivery Fee</p>
                      <p className="">$20.00</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="">Discount Code</p>
                      <p className="">YH24GBZ</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="">Loyalty Points Used</p>
                      <p className="">0</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="">Total</p>
                      <p className="">$145.00</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className=""></div>
                      <div className=""></div>
                    </div>
                  </div>
                </div>
                <div className="mt-2 py-2 border-bottom">
                  <h5>Billing Address</h5>
                  <div className="">
                    <p className="mb-0">John Doe</p>
                    <p className="mb-0">20 Ighten Road</p>
                    <p className="">Burnley, LAN BB12 0HP GB</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h5>Delivery Address</h5>
                  <div className="">
                    <p className="mb-0">John Doe</p>
                    <p className="mb-0">20 Ighten Road</p>
                    <p className="mb-0">Burnley, LAN BB12 0HP GB</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="mb-2">
                  <h3>Payment</h3>
                </div>
                <form className="">
                  <label htmlFor="fname">Accepted Cards</label>
                  <div className="d-flex mb-4">
                    <i className="fa fa-cc-visa" style={{ color: "navy" }}></i>
                    <i className="fa fa-cc-amex" style={{ color: "blue" }}></i>
                    <i
                      className="fa fa-cc-mastercard"
                      style={{ color: "red" }}
                    ></i>
                    <i
                      className="fa fa-cc-discover"
                      style={{ color: "orange" }}
                    ></i>
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="cname">
                      Name on Card
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cname"
                      name="cardname"
                      placeholder="John More Doe"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="ccnum">
                      Credit card number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="ccnum"
                      name="cardnumber"
                      placeholder="1111-2222-3333-4444"
                    />
                  </div>
                  <div className="row">
                    <div className="col mb-3 row">
                      <label className="col-sm-3 col-form-label" htmlFor="exp">
                        Exp at
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          id="expmonth"
                          name="expmonth"
                          className="form-control"
                          placeholder="Month/Year"
                        ></input>
                      </div>
                    </div>
                    <div className="col mb-3 row">
                      <label className="col-sm-3 col-form-label" htmlFor="cvv">
                        CVV
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          className="form-control"
                          placeholder="352"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="d-grid gap-2">
                    <button className="btn btn-danger" to="/checkout">
                      Pay with Card
                    </button>
                  </div>
                </form>
                <div className="d-grid gap-2 mt-2">
                  <Link className="btn btn-warning" to="#">
                    Pay with Paypal
                  </Link>
                  <Link className="btn btn-dark" to="#">
                    Pay with ApplePay
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 ">
            <div className="mb-5 bg-white p-4">
              <h4>Loyalty Points: 25</h4>
              <p className="mb-0">For every $10.00 spent, you earn 1 point.</p>
              <p>You can always use this point to get something on our menu</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payment;
