import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { forgotPass, reset } from "../features/auth/authSlice";

const ForgotPassword = () => {
  const [email, setEmail] = useState();

  const dispatch = useDispatch();

  const { isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      setEmail("");
      toast.success(message);
    }

    dispatch(reset());
  }, [isError, isSuccess, message, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(forgotPass(email));
  };

  return (
    <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center my-5 container">
      <div className="card w-100" style={{ maxWidth: "460px" }}>
        <div className="card-body p-4">
          <section className="heading">
            <h3>Forgot Password</h3>
            <p>
              {" "}
              Forgot your password? No problem. Just let us know your email
              address and we will email you a password reset link that will
              allow you to choose a new one.
            </p>
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
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="floatingInput">Email address</label>
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
          <section className="py-3">
            <Link to="/login" className="">
              Remember password?
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
