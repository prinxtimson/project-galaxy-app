import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Layout from "../components/Layout";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const { name, email, phone, address } = formData;

  const { user } = useSelector((state) => state.auth);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (user) {
      setFormData(user.user);
    }
  }, [user]);

  const onSubmit = () => {};

  return (
    <Layout>
      <div className="container mt-5">
        <div className="">
          <h2>My Account</h2>
        </div>
        <div className="mb-5">
          <h4>Loyalty Points: 25</h4>
          <p className="mb-0">For every $10.00 spent, you earn 1 point.</p>
          <p>You can always use this point to get something on our menu</p>
        </div>
        <div className="">
          <div className="mb-5">
            <form onSubmit={onSubmit}>
              <div className="d-flex justify-content-between mb-4">
                <h3>My Details</h3>
                <button className="btn btn-dark">Update Details</button>
              </div>
              <div className="row mb-3">
                <label htmlFor="name" className="col-sm-2 col-form-label">
                  Name
                </label>
                <div className="col-sm-10 col-md-8">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="name"
                    name="name"
                    value={name}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="email" className="col-sm-2 col-form-label">
                  Email
                </label>
                <div className="col-sm-10 col-md-8">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    value={email}
                    name="email"
                    id="email"
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="phone" className="col-sm-2 col-form-label">
                  Phone Number
                </label>
                <div className="col-sm-10 col-md-8">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="address" className="col-sm-2 col-form-label">
                  Address
                </label>
                <div className="col-sm-10 col-md-8">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="address"
                    id="address"
                    value={address}
                    onChange={onChange}
                  />
                </div>
              </div>
            </form>
          </div>

          <div className="mb-5">
            <div className="d-flex justify-content-between">
              <h3>My Address Book</h3>
              <button className="btn btn-dark">Add New Delivery Address</button>
            </div>
            <div className="row mb-3">
              <label htmlFor="name" className="col-sm-2 col-form-label">
                Work
              </label>
              <div className="col-sm-10"></div>
            </div>
          </div>

          <div className="mb-5">
            <div className="d-flex justify-content-between">
              <h3>My Payment Details</h3>
              <button className="btn btn-dark">Add New Delivery Address</button>
            </div>
            <div className="row mb-3">
              <label htmlFor="name" className="col-sm-2 col-form-label">
                Payment Card
              </label>
              <div className="col-sm-10"></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
