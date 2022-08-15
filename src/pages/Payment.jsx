import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Layout from "../components/Layout";

const Payment = () => {
  const [cardData, setCardData] = useState({
    cardname: "",
    cardnumber: "",
    exp: "",
    cvv: "",
  });
  const { checkout } = useSelector((state) => state.checkout);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!checkout) {
      navigate("/menu");
    }
  }, [checkout, navigate]);

  const onChange = (e) => {
    setCardData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      <div className="glass container p-3 p-sm-8 mt-5">
        <div className="mb-5">
          <h2>Payment</h2>
        </div>
        <div className="row">
          <div className="col-12 col-md-8 ">
            <div className="bg-white p-5">
              <div className="">
                <div className="">
                  <div className="mb-4">
                    <h4>Order Summary</h4>
                  </div>
                  <div className="mb-3">
                    <h5>Items ({checkout?.cart?.length || 0})</h5>

                    <ul className="ps-0">
                      {checkout?.cart.map((item, ind) => {
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
                              <div className="col-4">
                                {item.name}
                                {item.extras?.length > 0 && (
                                  <div>
                                    <span className="fw-bolder">Extras: </span>
                                    {item.extras?.map((extra, i) =>
                                      item.extras?.length - 1 === i ? (
                                        <span
                                          key={i}
                                        >{`${extra.qty} ${extra.name}`}</span>
                                      ) : (
                                        <span
                                          key={i}
                                        >{`${extra.qty} ${extra.name}, `}</span>
                                      )
                                    )}
                                  </div>
                                )}
                              </div>
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
                      <p className="">
                        £
                        {checkout?.cart
                          .reduce((total, item) => {
                            let subTotal = item.price * item.qty;

                            return total + subTotal;
                          }, 0)
                          .toFixed(2)}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="">Delivery Fee</p>
                      <p className="">£20.00</p>
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
                      <p className="">
                        £
                        {(
                          20 +
                          checkout?.cart.reduce((total, item) => {
                            let subTotal = item.price * item.qty;

                            return total + subTotal;
                          }, 0)
                        ).toFixed(2)}
                      </p>
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
                    <p className="mb-0">{checkout?.billing.name}</p>
                    <p className="mb-0">{checkout?.billing.phone}</p>
                    <p className="mb-0">{checkout?.billing.address}</p>
                    <p className="mb-0">{checkout?.billing.address_2}</p>
                    <p className="">{`${checkout?.billing.city}, ${checkout?.billing.state}`}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h5>Delivery Address</h5>
                  <div className="">
                    <p className="mb-0">{checkout?.delivery.name}</p>
                    <p className="mb-0">{checkout?.delivery.phone}</p>
                    <p className="mb-0">{checkout?.delivery.address}</p>
                    <p className="">{`${checkout?.delivery.city}, ${checkout?.delivery.state}`}</p>
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
                    <label className="form-label" htmlFor="cardname">
                      Name on Card
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cardname"
                      name="cardname"
                      value={cardData.cardname}
                      onChange={onChange}
                      placeholder="John More Doe"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="cardnumber">
                      Credit card number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={cardData.cardnumber}
                      onChange={onChange}
                      id="cardnumber"
                      name="cardnumber"
                      placeholder="1111-2222-3333-4444"
                    />
                  </div>
                  <div className="row">
                    <div className="col mb-3 row">
                      <label className="col-sm-3 col-form-label" htmlFor="exp">
                        Expiry
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          value={cardData.exp}
                          name="exp"
                          onChange={onChange}
                          id="exp"
                          className="form-control"
                          placeholder="MM/YY"
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
                          value={cardData.cvv}
                          name="cvv"
                          onChange={onChange}
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
