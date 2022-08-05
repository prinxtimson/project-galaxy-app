import { useState, useEffect } from "react";
import Layout from "../components/Layout";

const Checkout = () => {
  const [billing, setBilling] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "United Kingdom",
    billing_is_delivery: false,
  });
  const [delivery, setDelivery] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "United Kingdom",
  });

  useEffect(() => {
    if (billing.billing_is_delivery) {
      setDelivery({
        name: `${billing.first_name} ${billing.last_name}`,
        phone: billing.phone,
        address: billing.address,
        city: billing.city,
        state: billing.state,
        country: billing.country,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [billing.billing_is_delivery]);

  return (
    <Layout>
      <div className="container mt-5 bg-white p-4">
        <div className="mb-5">
          <h2>Checkout</h2>
        </div>
        <div className="">
          <div className="">
            <div className="mb-4">
              <h4>Billing Address</h4>
            </div>
            <div className="">
              <form className="">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="mb-2">
                      <h5>Personal Details</h5>
                    </div>
                    <div className="">
                      <div className=" mb-3">
                        <label className="form-label" htmlFor="First Name">
                          * First Name
                        </label>
                        <input
                          type="text"
                          className="form-control "
                          id="first_name"
                          name="first_name"
                          value={billing.first_name}
                          placeholder="First Name"
                          onChange={(e) =>
                            setBilling((preData) => ({
                              ...preData,
                              first_name: e.target.value,
                            }))
                          }
                          required
                        />
                      </div>
                      <div className=" mb-3">
                        <label className="form-label" htmlFor="Last Name">
                          * Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control "
                          id="last_name"
                          name="last_name"
                          value={billing.last_name}
                          placeholder="Last Name"
                          onChange={(e) =>
                            setBilling((preData) => ({
                              ...preData,
                              last_name: e.target.value,
                            }))
                          }
                          required
                        />
                      </div>
                      <div className=" mb-3">
                        <label className="form-label" htmlFor="Email">
                          * Email
                        </label>
                        <input
                          type="email"
                          className="form-control "
                          id="email"
                          name="email"
                          value={billing.email}
                          placeholder="Email"
                          onChange={(e) =>
                            setBilling((preData) => ({
                              ...preData,
                              email: e.target.value,
                            }))
                          }
                          required
                        />
                      </div>
                      <div className=" mb-3">
                        <label className="form-label" htmlFor="Telephone">
                          * Telephone
                        </label>
                        <input
                          type="text"
                          className="form-control "
                          id="phone"
                          name="phone"
                          value={billing.phone}
                          placeholder="Telephone"
                          onChange={(e) =>
                            setBilling((preData) => ({
                              ...preData,
                              phone: e.target.value,
                            }))
                          }
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="mb-2">
                      <h5>Address</h5>
                    </div>
                    <div className="">
                      <div className=" mb-3">
                        <label className="form-label" htmlFor="Address 1">
                          * Address 1
                        </label>
                        <input
                          type="text"
                          className="form-control "
                          id="address"
                          name="address"
                          value={billing.address}
                          placeholder="Address 1"
                          onChange={(e) =>
                            setBilling((preData) => ({
                              ...preData,
                              address: e.target.value,
                            }))
                          }
                          required
                        />
                      </div>
                      <div className=" mb-3">
                        <label className="form-label" htmlFor="City">
                          * City
                        </label>
                        <input
                          type="text"
                          className="form-control "
                          id="city"
                          name="city"
                          value={billing.city}
                          placeholder="City"
                          onChange={(e) =>
                            setBilling((preData) => ({
                              ...preData,
                              city: e.target.value,
                            }))
                          }
                          required
                        />
                      </div>
                      <div className=" mb-3">
                        <label className="form-label" htmlFor="region/state">
                          * Region/State
                        </label>
                        <input
                          type="text"
                          className="form-control "
                          id="state"
                          name="state"
                          value={billing.state}
                          placeholder="Region/State"
                          onChange={(e) =>
                            setBilling((preData) => ({
                              ...preData,
                              state: e.target.value,
                            }))
                          }
                          required
                        />
                      </div>
                      <div className=" mb-3">
                        <label className="form-label" htmlFor="Country">
                          Country
                        </label>
                        <input
                          type="text"
                          className="form-control "
                          id="country"
                          name="country"
                          value={"United Kingdom"}
                          placeholder="Country"
                          onChange={(e) =>
                            setBilling((preData) => ({
                              ...preData,
                              country: e.target.value,
                            }))
                          }
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="billing_is_delivery"
                    value={billing.billing_is_delivery}
                    onChange={(e) =>
                      setBilling((prevData) => ({
                        ...prevData,
                        billing_is_delivery: e.target.checked,
                      }))
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor="billing_is_delivery"
                  >
                    My delivery and billing addresses are the same
                  </label>
                </div>
                {!billing.billing_is_delivery && (
                  <div className="mt-4">
                    <div className="mb-2">
                      <h5>Delivery Details</h5>
                    </div>
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="">
                          <div className=" mb-3">
                            <label className="form-label" htmlFor="Name">
                              * Name
                            </label>
                            <input
                              type="text"
                              className="form-control "
                              id="name"
                              name="name"
                              value={delivery.name}
                              placeholder="Name"
                              onChange={(e) =>
                                setDelivery((preData) => ({
                                  ...preData,
                                  name: e.target.value,
                                }))
                              }
                              required
                            />
                          </div>

                          <div className=" mb-3">
                            <label className="form-label" htmlFor="Telephone">
                              * Telephone
                            </label>
                            <input
                              type="text"
                              className="form-control "
                              id="phone"
                              value={delivery.phone}
                              placeholder="Telephone"
                              onChange={(e) =>
                                setDelivery((preData) => ({
                                  ...preData,
                                  phone: e.target.value,
                                }))
                              }
                              required
                            />
                          </div>
                          <div className=" mb-3">
                            <label className="form-label" htmlFor="Address 1">
                              * Address 1
                            </label>
                            <input
                              type="text"
                              className="form-control "
                              id="address"
                              value={delivery.address}
                              placeholder="Address 1"
                              onChange={(e) =>
                                setDelivery((preData) => ({
                                  ...preData,
                                  address: e.target.value,
                                }))
                              }
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="">
                          <div className=" mb-3">
                            <label className="form-label" htmlFor="City">
                              * City
                            </label>
                            <input
                              type="text"
                              className="form-control "
                              id="city"
                              value={delivery.city}
                              placeholder="City"
                              onChange={(e) =>
                                setDelivery((preData) => ({
                                  ...preData,
                                  city: e.target.value,
                                }))
                              }
                              required
                            />
                          </div>
                          <div className=" mb-3">
                            <label
                              className="form-label"
                              htmlFor="region/state"
                            >
                              * Region/State
                            </label>
                            <input
                              type="text"
                              className="form-control "
                              id="state"
                              value={delivery.state}
                              placeholder="Region/State"
                              onChange={(e) =>
                                setDelivery((preData) => ({
                                  ...preData,
                                  state: e.target.value,
                                }))
                              }
                              required
                            />
                          </div>
                          <div className=" mb-3">
                            <label className="form-label" htmlFor="Country">
                              Country
                            </label>
                            <input
                              type="text"
                              className="form-control "
                              id="country"
                              value={delivery.country}
                              placeholder="Country"
                              onChange={(e) =>
                                setDelivery((preData) => ({
                                  ...preData,
                                  country: e.target.value,
                                }))
                              }
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="d-grid d-md-flex justify-content-md-end">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
