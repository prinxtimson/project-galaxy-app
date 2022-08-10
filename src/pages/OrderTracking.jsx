import { GMap } from "primereact/gmap";
import { useRef } from "react";

import Layout from "../components/Layout";

const OrderTracking = () => {
  const gmap = useRef(null);
  const options = {
    center: { lat: 36.890257, lng: 30.707417 },
    zoom: 12,
  };

  return (
    <Layout>
      <div className="glass container mt-5">
        <div className="mb-5">
          <h2>Order Tracking</h2>
        </div>
        <div className="">
          {/* <GMap
            //ref={gmap}
            options={options}
            style={{ width: "100%", minHeight: "320px" }}
          /> */}
        </div>
      </div>
    </Layout>
  );
};

export default OrderTracking;
