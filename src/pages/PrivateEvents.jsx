import Layout from "../components/Layout";

const PrivateEvents = () => {
  return (
    <Layout>
      <div className="glass container mt-5">
        <div className="mb-5">
          <h2>Private Events</h2>
        </div>
        <div className="">
          <div className="mb-3">
            <h5>
              Each location holds between 60 & 120 people, with disabled access
              and elevators.
            </h5>
            <h5>
              Catering can be provided at each location or the room can be
              rented for a set price.
            </h5>
          </div>
          <div className="mb-3">
            <h5>They are fantastic locations, ideal for:</h5>
            <ul>
              <li>Birthdays</li>
              <li>Parties</li>
              <li>Meetings</li>
              <li>Hen Nights</li>
              <li>Wedding Receptions</li>
              <li>etc.</li>
            </ul>
          </div>
          <div className="mb-3">
            <h4>For all enquiries please call:</h4>
            <div className="row" style={{ maxWidth: 450 }}>
              <h5 className="col-4">Telephone: </h5>
              <h5 className="col-6">
                <a href="tel:+01234567891">01234567891</a>
              </h5>
            </div>
          </div>
          <div className="mb-3">
            <h4>Or send us mail:</h4>
            <div className="row" style={{ maxWidth: 450 }}>
              <h5 className="col-4">E-mail: </h5>
              <h5 className="col-6">
                <a href="mailto:blackysrestaurant@gmail.com">
                  blackysrestaurant@gmail.com
                </a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivateEvents;
