//import React from 'react'

import Layout from "../components/Layout";

const OurRestaurant = () => {
  return (
    <Layout>
      <div className="glass container mt-5">
        <div className="mb-5">
          <h2>Our Restaurant</h2>
        </div>
        <div className="">
          <div className="mb-5">
            <h4>Manchester</h4>
            <p>
              Sir Matt Busby Way, Old Tra!ord, Stretford, Manchester M16 0RA
            </p>
            <div className="">
              <h4>Opening Times</h4>
              <div className="row" style={{ maxWidth: 450 }}>
                <h5 className="col-6">Monday to Friday </h5>
                <h5 className="col-6">1pm - 11pm</h5>
              </div>
              <div className="row" style={{ maxWidth: 450 }}>
                <h5 className="col-6">Saturday </h5>
                <h5 className="col-6">12pm - 1am</h5>
              </div>
              <div className="row" style={{ maxWidth: 450 }}>
                <h5 className="col-6">Sunday </h5>
                <h5 className="col-6">1pm - 8pm</h5>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <h3>Nottingham</h3>
            <p>The Cornerhouse, Burton St, Nottingham NG1 4DB</p>
            <div className="">
              <h3>Opening Times</h3>
              <div className="row" style={{ maxWidth: 450 }}>
                <h5 className="col-6">Monday to Friday </h5>
                <h5 className="col-6">1pm - 11pm</h5>
              </div>
              <div className="row" style={{ maxWidth: 450 }}>
                <h5 className="col-6">Saturday </h5>
                <h5 className="col-6">12pm - 1am</h5>
              </div>
              <div className="row" style={{ maxWidth: 450 }}>
                <h5 className="col-6">Sunday </h5>
                <h5 className="col-6">1pm - 8pm</h5>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <h3>London</h3>
            <p>Cromwell Rd, South Kensington, London SW7 5BD</p>
            <div className="">
              <h3>Opening Times</h3>
              <div className="row" style={{ maxWidth: 450 }}>
                <h5 className="col-6">Monday to Friday </h5>
                <h5 className="col-6">1pm - 11pm</h5>
              </div>
              <div className="row" style={{ maxWidth: 450 }}>
                <h5 className="col-6">Saturday </h5>
                <h5 className="col-6">12pm - 1am</h5>
              </div>
              <div className="row" style={{ maxWidth: 450 }}>
                <h5 className="col-6">Sunday </h5>
                <h5 className="col-6">1pm - 8pm</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OurRestaurant;
