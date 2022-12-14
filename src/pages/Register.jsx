import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

import { register, reset } from "../features/auth/authSlice";

import Layout from "../components/Layout";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    phone: "",
    email: "",
    password: "",
    confirm_password: "",
    visible: false,
    accept_terms: false,
    newsletter: false,
  });

  const {
    name,
    email,
    username,
    phone,
    password,
    confirm_password,
    visible,
    newsletter,
    accept_terms,
  } = formData;

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
    <Layout>
      <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center my-5 container">
        <div className="card w-100" style={{ maxWidth: "460px" }}>
          <div className="card-body p-4">
            <section className="heading">
              <h3>Sign up</h3>
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
                  <label htmlFor="floatingName">Enter name *</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={username}
                    placeholder="John Doe"
                    onChange={onChange}
                  />
                  <label htmlFor="floatingName">Enter username</label>
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
                  <label htmlFor="floatingEmail">Enter email *</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={phone}
                    placeholder="John Doe"
                    onChange={onChange}
                  />
                  <label htmlFor="floatingName">Enter telephone</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type={visible ? "text" : "password"}
                    className={
                      !password
                        ? "form-control"
                        : password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)
                        ? "form-control is-valid"
                        : "form-control is-invalid"
                    }
                    id="password"
                    name="password"
                    value={password}
                    placeholder="Enter your password"
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="floatingPassword">Enter password *</label>
                  <button
                    className="btn position-absolute border-0"
                    style={{ top: 10, right: 15 }}
                    type="button"
                    onClick={() =>
                      setFormData((prevData) => ({
                        ...prevData,
                        visible: !prevData.visible,
                      }))
                    }
                  >
                    {visible ? <FaEyeSlash /> : <FaEye />}
                  </button>
                  <div
                    id="passwordHelpBlock"
                    className={
                      !password
                        ? "form-text"
                        : password.match(
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
                          )
                        ? "form-text valid-feedback"
                        : "form-text invalid-feedback"
                    }
                  >
                    <small>
                      Your password must be at least 8 characters long, contain
                      letters and numbers, special characters.
                    </small>
                  </div>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type={visible ? "text" : "password"}
                    className={
                      !password
                        ? "form-control"
                        : password === confirm_password
                        ? "form-control is-valid"
                        : "form-control is-invalid"
                    }
                    id="confirm_password"
                    name="confirm_password"
                    value={confirm_password}
                    placeholder="Re-enter your password"
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="floatingConfirmPassword">
                    Confirm password *
                  </label>
                  <button
                    className="btn position-absolute border-0"
                    style={{ top: 10, right: 15 }}
                    type="button"
                    onClick={() =>
                      setFormData((prevData) => ({
                        ...prevData,
                        visible: !prevData.visible,
                      }))
                    }
                  >
                    {visible ? <FaEyeSlash /> : <FaEye />}
                  </button>
                  <div
                    id="passwordHelpBlock"
                    className={
                      !confirm_password
                        ? "d-none"
                        : password === confirm_password
                        ? "d-none"
                        : "form-text invalid-feedback"
                    }
                  >
                    <small>Password do not match</small>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={accept_terms}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          accept_terms: e.target.checked,
                        })
                      }
                      id="autoSizingCheck"
                      required
                    />
                    <label
                      className="form-check-label"
                      htmlFor="autoSizingCheck"
                      style={{ fontSize: 13 }}
                    >
                      I have read and agree to Blacky's{" "}
                      <Link
                        to="/privacy-policy"
                        className="text-decoration-underline"
                      >
                        Privacy Policy
                      </Link>{" "}
                      and{" "}
                      <Link
                        to="/terms-and-conditions"
                        className="text-decoration-underline"
                      >
                        Terms and Conditions
                      </Link>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="autoSizingCheck"
                      checked={newsletter}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          newsletter: e.target.checked,
                        })
                      }
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
                    Sign Up
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
                  className="btn google btn-lg"
                  disabled={isLoading}
                >
                  <i className="fa fa-google fa-fw"></i> Signup with Google+
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
