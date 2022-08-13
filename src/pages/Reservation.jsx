import { useState, useEffect } from "react";
import { Calendar } from "primereact/calendar";

import Layout from "../components/Layout";

const Reservation = () => {
  const [data, setData] = useState({
    name: "",
    date: "",
    time: "",
    phone: "",
    email: "",
    guest: 1,
  });

  useEffect(() => {
    // document.getElementById("datetime").pickatime({
    //   format: "hh:mm:ss a",
    // });
  }, []);

  const onChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <div className="glass container mt-5 p-4 p-sm-8">
        <div className="mb-5">
          <h2>Reservation</h2>
        </div>
        <div className="">
          <div className="card w-100 mx-auto" style={{ maxWidth: "560px" }}>
            <div className="card-body p-4 p-md-5">
              <section className="heading">
                <h3>Reservation Enquiry Form</h3>
              </section>
              <section className="form">
                <form onSubmit={onSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={data.name}
                      placeholder="John Doe"
                      onChange={onChange}
                      required
                    />
                    <label htmlFor="floatingName">Enter name *</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="date"
                      className="form-control"
                      name="date"
                      value={data.name}
                      placeholder="Date"
                      onChange={onChange}
                      required
                    />
                    <label htmlFor="floatingName">Date *</label>
                  </div>
                  <div className="form-floating mb-3">
                    <Calendar
                      name="time"
                      timeOnly
                      showTime
                      hourFormat="12"
                      value={data.time}
                      onChange={onChange}
                      placeholder="Time"
                      className="w-100"
                    ></Calendar>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="datetime"
                      name="guest"
                      value={data.guest}
                      placeholder="John Doe"
                      onChange={onChange}
                      required
                    />
                    <label htmlFor="floatingName">Number of Guests *</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      value={data.phone}
                      placeholder="John Doe"
                      onChange={onChange}
                    />
                    <label htmlFor="floatingName">Enter telephone</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={data.email}
                      placeholder="Enter your email"
                      onChange={onChange}
                      required
                    />
                    <label htmlFor="floatingEmail">Enter email *</label>
                  </div>
                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      //disabled={isLoading}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
        <div className="mt-5 text-center">
          <h4>
            For all bookings over 5 people please call{" "}
            <a href="tel:+01234567891">01234567891</a> or email{" "}
            <a href="mailto:blackysrestaurant@gmail.com">
              blackysrestaurant@gmail.com
            </a>
          </h4>
        </div>
      </div>
    </Layout>
  );
};

export default Reservation;
