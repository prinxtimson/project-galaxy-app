import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Layout from "../components/Layout";
import {
  updateProfile,
  getProfile,
  reset,
} from "../features/profile/profileSlice";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const dispatch = useDispatch();

  const { name, email, phone, address } = formData;

  const { profile, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.profile
  );

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      toast.success("Profile updated successfuly");
    }

    dispatch(reset());
  }, [isError, isSuccess, message, dispatch]);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  useEffect(() => {
    if (profile.user) {
      setFormData(profile.user);
    }
  }, [profile]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(formData));
  };

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
                <button disabled={isLoading} className="btn btn-dark">
                  Update Details
                </button>
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
                    readOnly
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
