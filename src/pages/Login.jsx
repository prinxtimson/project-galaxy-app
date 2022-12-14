import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { login, reset } from "../features/auth/authSlice";

import Layout from "../components/Layout";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
    visible: false,
  });

  const { email, password, remember, visible } = formData;

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

    dispatch(login(formData));
  };

  return (
    <Layout>
      <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center my-5 container">
        <div className="card w-100" style={{ maxWidth: "460px" }}>
          <div className="card-body p-4">
            <section className="heading">
              <h3>Sign in</h3>
              <p>Please enter your details to sign in</p>
            </section>
            <section className="form">
              <form onSubmit={onSubmit}>
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
                  <label htmlFor="floatingInput">Email address</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type={visible ? "text" : "password"}
                    className="form-control"
                    id="password"
                    name="password"
                    value={password}
                    placeholder="Enter your password"
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="floatingPassword">Password</label>
                  <button
                    className="btn position-absolute end-0 border-0"
                    style={{ top: 10 }}
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
                </div>
                <div className="d-flex my-2 justify-content-between">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="autoSizingCheck"
                      value={remember}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="autoSizingCheck"
                    >
                      Remember me
                    </label>
                  </div>

                  <Link to="/forgot-password" className="">
                    Forgot your password?
                  </Link>
                </div>
                <div className="d-grid">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn btn-primary btn-lg"
                  >
                    Signin
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
                  <i className="fa fa-google fa-fw"></i> Signin with Google+
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
