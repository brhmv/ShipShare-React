import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUpAsync } from "../Store/AuthSlice";
import { ToastContainer, toast } from "react-toastify";

const SignUpForm = ({ setIsLoading }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rules, setRules] = useState(false);

  const signInInfo = useSelector((state) => state.auth);

  useEffect(() => {
    if (signInInfo.isAuthenticated) {
      toast.success(
        `You successfully completed registration,redirecting to home page...`
      );
      setTimeout(() => {
        setIsLoading(false);
        navigate("/home");
      }, 2000);
    } else {
      if (signInInfo.error != null) {
        toast.error(`${signInInfo.error}`);
        setIsLoading(false);
      }
    }
  }, [signInInfo, navigate]);

  const handleOnClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (rules) {
      if (password === confirmPassword) {
        dispatch(signUpAsync(userName, email, password));
      } else {
        toast.error("Please check your password!");
        setIsLoading(false);
      }
    } else {
      toast.error(
        "Please check 'I agree to terms and conditions of this website'"
      );
      setIsLoading(false);
    }
  };

  return (
    <section className="sign_in_area bg_color sec_pad">
      <div className="container">
        <div className="sign_info">
          <div className="row">
            <div className="col-lg-5">
              <div className="sign_info_content">
                <h3 className="f_p f_600 f_size_24 t_color3 mb_40">
                  Allready have an account?
                </h3>
                <h2 className="f_p f_400 f_size_30 mb-30">
                  Login now and
                  <br /> starting using our <br />
                  <span className="f_700">amazing</span> posts.
                </h2>

                <ul className="list-unstyled mb-0">
                  <li>
                    <i className="ti-check"></i> Free Features
                  </li>
                  <li>
                    <i className="ti-check"></i> Unlimited User Accounts
                  </li>
                </ul>

                <button
                  type="submit"
                  className="btn_three sign_btn_transparent"
                >
                  <Link className="nav-link fs" to="../SignIn">
                    Sign In
                  </Link>
                </button>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="login_info">
                <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Sign Up</h2>
                <form
                  onSubmit={handleOnClick}
                  className="login-form sign-in-form"
                >
                  <div className="form-group text_box">
                    <label className="f_p text_c f_400">Username</label>
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>

                  <div className="form-group text_box">
                    <label className="f_p text_c f_400">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="example@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-group text_box">
                    <label className="f_p text_c f_400">Password</label>
                    <input
                      type="password"
                      required
                      placeholder="******"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="form-group text_box">
                    <label className="f_p text_c f_400">Confirm Password</label>
                    <input
                      type="password"
                      required
                      placeholder="******"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>

                  <div className="extra mb_20">
                    <div className="checkbox remember">
                      <label>
                        <input
                          value={rules}
                          onChange={(e) => setRules(e.currentTarget.value)}
                          type="checkbox"
                        />{" "}
                        I agree to terms and conditions of this website
                      </label>
                    </div>

                    <div className="forgotten-password">
                      <a href="/#">Forgot Password?</a>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <button type="submit" className="btn_three fs">
                      Sign Up
                    </button>

                    <div className="social_text d-flex ">
                      <div className="lead-text">Or Sign up Using</div>
                      <ul className="list-unstyled social_tag mb-0">
                        <li>
                          <a href="/https://www.facebook.com">
                            <i className="ti-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/https://twitter.com/?lang=en">
                            <i className="ti-twitter-alt"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/https://google.com">
                            <i className="ti-google"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};
export default SignUpForm;
