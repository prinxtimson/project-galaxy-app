import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { resetPass, reset } from "../features/auth/authSlice";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });

  const { email, password, confirm_password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      toast.success(message);
      navigate("/login");
    }

    dispatch(reset());
  }, [isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(resetPass(formData));
  };

  return (
    <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center my-5 container">
      <div className="card w-100" style={{ maxWidth: "460px" }}>
        <div className="card-body p-4">
          <section className="heading">
            <h3>Reset Password</h3>
          </section>
          <section className="form">
            <form onSubmit={onSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  placeholder="Enter your email"
                  readOnly
                />
                <label htmlFor="floatingInput">Email address</label>
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
                />
                <label htmlFor="floatingPassword">Password</label>
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
                />
                <label htmlFor="floatingConfirmPassword">
                  Confirm password
                </label>
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn btn-primary btn-lg"
                >
                  Reset Password
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
