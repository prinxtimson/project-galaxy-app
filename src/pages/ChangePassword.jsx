import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { changePass, reset } from "../features/auth/authSlice";

import Layout from "../components/Layout";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    new_password: "",
    new_password_confirmation: "",
  });
  const { password, new_password, new_password_confirmation } = formData;

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
      setFormData({
        password: "",
        new_password: "",
        new_password_confirmation: "",
      });
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

    dispatch(changePass(formData));
  };

  return (
    <Layout>
      <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center my-5 container">
        <div className="card w-100" style={{ maxWidth: "460px" }}>
          <div className="card-body p-4">
            <section className="heading">
              <h3>Change Password</h3>
            </section>
            <section className="form">
              <form onSubmit={onSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    placeholder="Enter your password"
                    readOnly
                  />
                  <label htmlFor="floatingInput">Current password</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="new_password"
                    name="new_password"
                    value={new_password}
                    placeholder="Enter your new password"
                    onChange={onChange}
                  />
                  <label htmlFor="floatingPassword">New password</label>
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
                    id="new_password_confirmation"
                    name="new_password_confirmation"
                    value={new_password_confirmation}
                    placeholder="Re-enter your password"
                    onChange={onChange}
                  />
                  <label htmlFor="floatingConfirmPassword">
                    Confirm new password
                  </label>
                </div>
                <div className="d-grid">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn btn-primary btn-lg"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChangePassword;
