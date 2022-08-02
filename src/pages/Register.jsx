import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

import { register, reset } from "../features/auth/authSlice";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const { name, email, password, confirm_password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== confirm_password) {
      toast.error("Password not match");
      return;
    }

    dispatch(register(formData));
  };

  return (
    <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center my-5 container">
      <div className="card w-100" style={{ maxWidth: "460px" }}>
        <div className="card-body p-4">
          <section className="heading">
            <h3>Register</h3>
            <p>Please enter your details to create an account</p>
          </section>
          <section className="form">
            <form onSubmit={onSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={name}
                  placeholder="John Doe"
                  onChange={onChange}
                  required
                />
                <label htmlFor="floatingName">Enter your name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={onChange}
                  required
                />
                <label htmlFor="floatingEmail">Enter your email</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={onChange}
                  required
                />
                <label htmlFor="floatingPassword">Enter your password</label>
                <div id="passwordHelpBlock" className="form-text">
                  <small>
                    Your password must be at least 8 characters long, contain
                    letters and numbers, special characters.
                  </small>
                </div>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="confirm_password"
                  name="confirm_password"
                  value={confirm_password}
                  placeholder="Re-enter your password"
                  onChange={onChange}
                  required
                />
                <label htmlFor="floatingConfirmPassword">
                  Confirm your password
                </label>
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="autoSizingCheck"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="autoSizingCheck"
                    style={{ fontSize: 13 }}
                  >
                    I have read and agree to Blacky's{" "}
                    <Link to="#" className="text-decoration-underline">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link to="#" className="text-decoration-underline">
                      Terms and Conditions
                    </Link>
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="autoSizingCheck"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="autoSizingCheck"
                    style={{ fontSize: 13 }}
                  >
                    check to receive marketing and promotional updates
                  </label>
                </div>
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  disabled={isLoading}
                >
                  Submit
                </button>
              </div>
            </form>
          </section>
          <section className="d-flex align-items-center py-3">
            <div className="border" style={{ width: "40%" }}></div>
            <div className="text-center" style={{ width: "20%" }}>
              or
            </div>
            <div className="border" style={{ width: "40%" }}></div>
          </section>
          <section>
            <div className="d-grid mb-3">
              <button
                type="submit"
                className="btn btn-danger btn-lg"
                disabled={isLoading}
              >
                Register with Google
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Register;
