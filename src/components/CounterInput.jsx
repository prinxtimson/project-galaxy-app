const CounterInput = ({ value, setValue }) => {
  const onChange = (val) => {
    setValue(parseInt(val) || "");
  };

  const increase = () => {
    let newVal = value + 1;
    setValue(newVal);
  };

  const decrease = () => {
    if (value === 0) return;
    let newVal = value - 1;
    setValue(newVal);
  };

  return (
    <div className="input-group">
      <button className="btn btn-dark" type="button" onClick={decrease}>
        -
      </button>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="form-control px-2 px-md-3"
        min={0}
      />
      <button className="btn btn-dark" type="button" onClick={increase}>
        +
      </button>
    </div>
  );
};

export default CounterInput;
