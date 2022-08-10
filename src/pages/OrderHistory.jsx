import Layout from "../components/Layout";

const OrderHistory = () => {
  return (
    <Layout>
      <div className="glass container mt-5">
        <div className="mb-5">
          <h2>Order History</h2>
        </div>
        <div className="">
          {HISTORY.map((val, ind) => (
            <div className="card my-5" key={ind}>
              <div className="card-body mt-2">
                <h5 className="card-title ms-4">{val.date}</h5>
                <div className="my-4">
                  <ul className="ps-1">
                    {val.items.map((item, index) => (
                      <li key={index} className="my-3">
                        <div className="row align-items-center">
                          <div className="  col-2 ">
                            <img
                              src={item.img}
                              style={{ width: 75, height: 75 }}
                              alt=""
                              className="rounded"
                            />
                          </div>
                          <div className=" col-7">
                            <div className="row">
                              <div className="col-1">{item.quantity}</div>
                              <div className="col-1">X</div>
                              <div className="col-8">{item.name}</div>
                            </div>
                          </div>
                          <div className="col-3">
                            <div>
                              ${(item.quantity * item.price).toFixed(2)}
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="row my-4">
                  <div className="col-1 col-md-2"></div>
                  <div className="col-7">
                    <h4>Total (Incl. VAT & Delivery)</h4>
                  </div>
                  <div className="col-3">
                    <h4>$ {(val.total + val.delivery + val.vat).toFixed(2)}</h4>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="my-2">
                    <button className="btn btn-success btn-lg">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default OrderHistory;

const HISTORY = [
  {
    date: "June 12th, 2022, 5:16 PM",
    total: 19.0,
    vat: 2.3,
    delivery: 5.0,
    items: [
      {
        img: "./images/veg_img.jpg",
        name: "Vegetable Spring Roll",
        price: 10.5,
        quantity: 1,
      },
      {
        img: "./images/veg_img_3.jpg",
        name: "Coca Cola",
        price: 5.0,
        quantity: 1,
      },
      {
        img: "./images/veg_img_2.jpg",
        name: "Salad",
        price: 3.5,
        quantity: 2,
      },
    ],
  },
  {
    date: "June 18th, 2022, 2:16PM",
    total: 45.0,
    vat: 4.3,
    delivery: 5.0,
    items: [
      {
        img: "./images/veg_img_3.jpg",
        name: "Chicken Katsu Curry",
        price: 26.0,
        quantity: 2,
      },
      {
        img: "./images/veg_img_4.jpg",
        name: "Sweet & Sour Chicken",
        price: 13.0,
        quantity: 1,
      },
      {
        img: "./images/veg_img_6.jpg",
        name: "Orange & Lemongrass Ice Tea",
        price: 6.5,
        quantity: 1,
      },
    ],
  },
];
