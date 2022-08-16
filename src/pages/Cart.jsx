import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import CounterInput from "../components/CounterInput";
import Layout from "../components/Layout";

import { removeFromCart, update } from "../features/cart/cartSlice";

const Cart = () => {
  const [coupon, setCoupon] = useState("");
  const [points, setPoints] = useState(0);
  const [mode, setMode] = useState("");

  const { cart, isSuccess, isError, message } = useSelector(
    (state) => state.cart
  );

  const selectItems = ["Eat In", "Eat Out"];

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
  }, [cart, isError, isSuccess, message]);

  const onDelete = (data) => {
    dispatch(removeFromCart(data));
  };

  return (
    <Layout>
      <div className="glass container p-3 p-sm-8 mt-5">
        <div className="my-5">
          <h2>Cart</h2>
        </div>
        {cart?.length > 0 ? (
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="card p-4 ">
                <div className="py-2 px-3">
                  <h5>Order Summary</h5>
                </div>
                <div className="card-body overflow-auto">
                  <ul className="ps-0" style={{ minWidth: 845 }}>
                    <li className="border">
                      <div className="row align-items-center justify-content-center py-2">
                        <div className="col-1 text-center"></div>
                        <div className="col-5 text-center">Items</div>
                        <div className="col-2 text-center">Quantity</div>
                        <div className="col-2 text-center">Unit Price</div>
                        <div className="col-2 text-center">Total</div>
                      </div>
                    </li>
                    {cart.map((item, ind) => {
                      const updateQty = (val) => {
                        dispatch(update({ ...item, qty: val }));
                      };

                      return (
                        <li key={ind} className="border ">
                          <div className="row align-items-center py-2">
                            <div className="col-1 d-flex justify-content-center">
                              <button
                                type="button"
                                className="btn"
                                onClick={() => onDelete(item)}
                              >
                                <FaTrash />
                              </button>
                            </div>
                            <div className="col-1">
                              <img
                                src={item.img}
                                style={{ width: 55, height: 55 }}
                                alt=""
                                className="rounded"
                              />
                            </div>
                            <div className="col-4">
                              <p className="mb-0">
                                <strong>{item.name}</strong>
                              </p>

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
                            <div className="col-2">
                              <CounterInput
                                value={item.qty}
                                setValue={updateQty}
                              />
                            </div>
                            <div className="col-2 text-center">
                              £{item.price.toFixed(2)}
                            </div>
                            <div className="col-2 text-center">
                              £{(item.qty * item.price).toFixed(2)}
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 mt-4">
              <div className="card">
                <div className="card-body">
                  <div className="">
                    <label className="form-label">Discount Code</label>
                    <form className="d-flex">
                      <div className=" mb-3">
                        <input
                          type="text"
                          className="form-control form-control-lg "
                          id="coupon"
                          name="coupon"
                          value={coupon}
                          placeholder="Discount Code"
                          onChange={(e) => setCoupon(e.target.value)}
                          required
                        />
                      </div>
                      <div className="">
                        <button
                          type="submit"
                          // disabled={isLoading}
                          className="btn btn-dark btn-lg ms-2"
                        >
                          Apply
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="mt-3">
                    <div
                      className="row align-items-center mb-2"
                      style={{ maxWidth: 456 }}
                    >
                      <label
                        className="col-8 col-sm-6 col-form-label"
                        htmlFor="Loyalty Points Used"
                      >
                        Loyalty Points Used
                      </label>
                      <div className="col-4 col-sm-6">
                        <InputNumber
                          value={points}
                          showButtons
                          onValueChange={(e) => setPoints(e.value)}
                          min={0}
                          max={100}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div
                      className="row align-items-center mb-2"
                      style={{ maxWidth: 456 }}
                    >
                      <label
                        className="col-8 col-sm-6 col-form-label"
                        htmlFor="Loyalty Points Used"
                      >
                        Eat-in/Eat-out
                      </label>
                      <div className="col-4 col-sm-6">
                        <Dropdown
                          value={mode}
                          options={selectItems}
                          onChange={(e) => setMode(e.value)}
                          placeholder="Select"
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" mt-3">
                    <ul className="ps-0">
                      <li className=" pb-2">
                        <div className="d-flex justify-content-between lh-1">
                          <div className="">
                            <p className="mb-0">Delivery Fee </p>
                          </div>
                          <div className="">
                            {mode === "Eat In" ? "£0.00" : "£3.99"}
                          </div>
                        </div>
                        <small
                          className="text-muted lh-1"
                          style={{ fontSize: 13 }}
                        >
                          Free Delivery on orders over £3.99
                        </small>
                      </li>
                      <li className="d-flex pb-2 justify-content-between">
                        <div className="">Sub Total</div>
                        <div className="">
                          £
                          {cart
                            .reduce((total, item) => {
                              let subTotal = item.price * item.qty;

                              return total + subTotal;
                            }, 0)
                            .toFixed(2)}
                        </div>
                      </li>
                      <li className="d-flex justify-content-between border-top pt-2">
                        <div className="">Total</div>
                        <div className="">
                          £
                          {cart
                            .reduce((total, item) => {
                              let subTotal = item.price * item.qty;

                              return total + subTotal;
                            }, 0)
                            .toFixed(2)}
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="d-grid gap-2">
                    <Link className="btn btn-danger" to="/checkout">
                      Checkout
                    </Link>
                    <Link className="btn btn-warning" to="#">
                      Pay with Paypal
                    </Link>
                    <Link className="text-center" to="/menu">
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <p>
                  No food in your cart yet, please visit the{" "}
                  <Link to="/menu" className="text-decoration-underline">
                    Menu
                  </Link>{" "}
                  page to add food to cart
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
