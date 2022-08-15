const AddressForm = ({ data, onChange, onSubmit, onAddressClose }) => {
  return (
    <div
      className="modal fade"
      id="addressModal"
      tabindex="-1"
      aria-labelledby="addressModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addressModalLabel">
              Add Delivery Address
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row g-3">
              <div className="col-12">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  value={data.address}
                  onChange={onChange}
                  className="form-control"
                  id="address"
                  name="address"
                  placeholder="1234 Main St"
                />
              </div>
              <div className="col-12">
                <label htmlFor="address_2" className="form-label">
                  Address 2
                </label>
                <input
                  type="text"
                  value={data.address_2}
                  onChange={onChange}
                  className="form-control"
                  id="address_2"
                  name="address_2"
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  value={data.city}
                  name="city"
                  onChange={onChange}
                  className="form-control"
                  id="city"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="state" className="form-label">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={data.state}
                  onChange={onChange}
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={onAddressClose}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onSubmit}
            >
              Add Address
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
