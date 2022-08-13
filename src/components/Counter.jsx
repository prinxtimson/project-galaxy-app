const CounterInput = ({ data, setValue, value }) => {
  const onChange = (val) => {
    let newVal = parseInt(val) || "";
    setValue({ ...data, qty: newVal });
  };

  const increase = () => {
    let newVal = data.qty + 1 || 1;
    setValue({ ...data, qty: newVal });
  };

  const decrease = () => {
    if (data.qty === 0) return;
    let newVal = data.qty - 1 || 0;
    setValue({ ...data, qty: newVal });
  };

  return (
    <div className="col-4">
      <div className="input-group ">
        <button className="btn btn-dark" type="button" onClick={decrease}>
          -
        </button>
        <input
          type="number"
          value={value}
          //style={{ maxWidth: 50 }}
          onChange={(e) => onChange(e.target.value)}
          className="form-control px-2 px-md-3"
          min={0}
        />
        <button className="btn btn-dark" type="button" onClick={increase}>
          +
        </button>
      </div>
    </div>
  );
};

export default CounterInput;
