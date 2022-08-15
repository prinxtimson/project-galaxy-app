const CreditCardForm = ({ data, onChange, onSubmit, onCardClose }) => {
  return (
    <div
      className="modal fade"
      id="creditCardModal"
      tabIndex="-1"
      aria-labelledby="creditCardModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="creditCardModalLabel">
              Add Credit Card
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
                <label htmlFor="cardname" className="form-label">
                  Name on Card
                </label>
                <input
                  type="text"
                  value={data.cardname}
                  onChange={onChange}
                  className="form-control"
                  id="cardname"
                  name="cardname"
                  placeholder="John More Doe"
                />
              </div>
              <div className="col-12">
                <label htmlFor="cardnumber" className="form-label">
                  Credit card number
                </label>
                <input
                  type="text"
                  value={data.cardnumber}
                  onChange={onChange}
                  className="form-control"
                  id="cardnumber"
                  name="cardnumber"
                  placeholder="1111 2222 3333 4444"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="exp" className="form-label">
                  Expiry
                </label>
                <input
                  type="text"
                  value={data.exp}
                  name="exp"
                  onChange={onChange}
                  className="form-control"
                  id="exp"
                  placeholder="MM/YY"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="cvv" className="form-label">
                  CVV
                </label>
                <input
                  type="text"
                  value={data.cvv}
                  name="cvv"
                  onChange={onChange}
                  className="form-control"
                  placeholder="123"
                  id="cvv"
                />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={onCardClose}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onSubmit}
            >
              Add Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardForm;
