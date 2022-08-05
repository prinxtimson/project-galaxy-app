import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import CounterInput from "../components/CounterInput";
import Layout from "../components/Layout";

const Cart = () => {
  const [order, setOrder] = useState(ITEMS);
  const [coupon, setCoupon] = useState("");

  return (
    <Layout>
      <div className="container mt-5">
        <div className="mb-5">
          <h2>Cart</h2>
        </div>
        <div className="row">
          <div className="col-12 col-md-8">
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
                  {order.map((item, ind) => {
                    const updateQty = (val) => {
                      item.qty = val;
                      let prevOrder = [...order];
                      prevOrder.splice(ind, 1, { ...item });
                      setOrder(prevOrder);
                    };

                    const onDelete = () => {
                      let prevOrder = [...order];
                      prevOrder.splice(ind, 1);
                      setOrder(prevOrder);
                    };
                    return (
                      <li key={ind} className="border ">
                        <div className="row align-items-center py-2">
                          <div className="col-1 d-flex justify-content-center">
                            <button
                              type="button"
                              className="btn"
                              onClick={onDelete}
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
                          <div className="col-4">{item.name}</div>
                          <div className="col-2">
                            <CounterInput
                              value={item.qty}
                              setValue={updateQty}
                            />
                          </div>
                          <div className="col-2 text-center">
                            {item.price.toFixed(2)}
                          </div>
                          <div className="col-2 text-center">
                            {(item.qty * item.price).toFixed(2)}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="">
                  <label className="form-label">Enter Coupon</label>
                  <form className="d-flex">
                    <div className=" mb-3">
                      <input
                        type="text"
                        className="form-control form-control-lg "
                        id="coupon"
                        name="coupon"
                        value={coupon}
                        placeholder="Enter Coupon"
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
                <div className=" mt-4">
                  <ul className="ps-0">
                    <li className=" pb-2">
                      <div className="d-flex justify-content-between lh-1">
                        <div className="">
                          <p className="mb-0">Delivery Fee </p>
                        </div>
                        <div className="">{"20.00"}</div>
                      </div>
                      <small
                        className="text-muted lh-1"
                        style={{ fontSize: 13 }}
                      >
                        Free Delivery on orders over £30
                      </small>
                    </li>
                    <li className="d-flex pb-2 justify-content-between">
                      <div className="">Sub Total</div>
                      <div className="">
                        {order
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
                        {order
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
                  <Link className="text-center" to="#">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;

const ITEMS = [
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
  {
    img: "./images/veg_img_4.jpg",
    name: "Sweet & Sour Chicken",
    price: 13.0,
    qty: 1,
  },
];
