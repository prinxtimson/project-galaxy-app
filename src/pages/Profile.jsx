import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";
import { MdCreditCard, MdDelete, MdLocationPin } from "react-icons/md";
import AddressForm from "../components/AddressForm";
import CreditCardForm from "../components/CreditCardForm";
import Layout from "../components/Layout";
import {
  updateProfile,
  getProfile,
  addAddress,
  addCard,
  removeAddress,
  removeCard,
  reset,
} from "../features/profile/profileSlice";

// addAddressBtn.current.click()
//       addCardBtn.current.

const Profile = () => {
  const addAddressBtn = useRef(null);
  const addCardBtn = useRef(null);
  const [addressData, setAddressData] = useState({
    address: "",
    address_2: "",
    city: "",
    state: "",
  });
  const [cardData, setCardData] = useState({
    cardname: "",
    cardnumber: "",
    exp: "",
    cvv: "",
  });
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

  const onAddressChange = (e) => {
    setAddressData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onCreditChange = (e) => {
    setCardData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onAddressSubmit = (e) => {
    e.preventDefault();
    let id = uuid();
    dispatch(addAddress({ ...addressData, id }));
  };

  const onCreditCardSubmit = (e) => {
    e.preventDefault();
    let id = uuid();
    dispatch(addCard({ ...cardData, id }));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      toast.success(message);
      setCardData({
        cardname: "",
        cardnumber: "",
        exp: "",
        cvv: "",
      });
      setAddressData({
        address: "",
        address_2: "",
        city: "",
        state: "",
      });
    }

    dispatch(reset());
  }, [isError, isSuccess, message, dispatch]);

  const onAddressClose = () => {
    setAddressData({
      address: "",
      address_2: "",
      city: "",
      state: "",
    });
  };

  const onCardClose = () => {
    setCardData({
      cardname: "",
      cardnumber: "",
      exp: "",
      cvv: "",
    });
  };

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
      <AddressForm
        data={addressData}
        onChange={onAddressChange}
        onSubmit={onAddressSubmit}
        onAddressClose={onAddressClose}
      />
      <CreditCardForm
        data={cardData}
        onChange={onCreditChange}
        onSubmit={onCreditCardSubmit}
        onCardClose={onCardClose}
      />
      <div className="glass container mt-5">
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
                    type="number"
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
              <button
                type="button"
                className="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#addressModal"
                ref={addAddressBtn}
              >
                Add New Delivery Address
              </button>
            </div>
            <div className="row my-3">
              <label htmlFor="name" className="col-sm-2 col-form-label">
                Address
              </label>
              <div className="col-sm-10 col-md-8">
                <ul className="list-group">
                  {profile.addresses?.map((val) => (
                    <li
                      className="list-group-item d-flex justify-content-betwee align-items-center"
                      key={val.id}
                    >
                      <span className="mx-3">
                        <MdLocationPin size={30} />
                      </span>
                      <div className="flex-grow-1">
                        <div className="fw-fold ">{val.address}</div>
                        <div className="">{val.address_2}</div>
                        <div className="">
                          {val.city}
                          {", "}
                          {val.state}
                        </div>
                      </div>

                      <span>
                        <button
                          type="button"
                          onClick={() => dispatch(removeAddress(val))}
                          className="btn"
                        >
                          <MdDelete />
                        </button>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <div className="d-flex justify-content-between">
              <h3>My Payment Details</h3>
              <button
                type="button"
                className="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#creditCardModal"
                ref={addCardBtn}
              >
                Add New Card Details
              </button>
            </div>
            <div className="row my-3">
              <label htmlFor="name" className="col-sm-2 col-form-label">
                Payment Card
              </label>
              <div className="col-sm-10 col-md-8">
                <ul className="list-group">
                  {profile.cards?.map((card) => (
                    <li
                      className="list-group-item d-flex justify-content-betwee align-items-center"
                      key={card.id}
                    >
                      <span className="mx-3">
                        <MdCreditCard size={35} />
                      </span>
                      <div className="flex-grow-1">
                        <div className="fw-fold ">{card.cardname}</div>
                        {` ${card.cardnumber?.substring(
                          0,
                          4
                        )}************${card.cardnumber?.substring(
                          card.cardnumber?.length - 4
                        )}`}
                      </div>
                      <span className="mx-3">{card.exp}</span>
                      <span>
                        <button
                          type="button"
                          onClick={() => dispatch(removeCard(card))}
                          className="btn"
                        >
                          <MdDelete />
                        </button>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
