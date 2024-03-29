import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signInAsync } from "../Store/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const SignInFrom = ({ setIsLoading }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInInfo = useSelector((state) => state.auth);

  useEffect(() => {
    if (signInInfo.isAuthenticated) {
      toast.success(`You successfully logged in`);
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

  const handleOnClick = async () => {
    setIsLoading(true);
    dispatch(signInAsync(email, password));
  };

  // async function handleOnClick() {
  //     const data = { 'email': email, 'password': password }

  //     const response = await fetch('https://localhost:7189/api/auth/signIn', {
  //         method: "POST",
  //         headers: {
  //             "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(data),
  //     }).catch(err => console.log(err));

  //     const responseData = await response.json();

  //     Cookies.set('accessToken', responseData.accessToken, { expires: new Date(responseData.expiration) });

  //     // reloadNavbar();

  //     setSignInSuccess(true);

  //     console.log(responseData);

  //     navigate('/home');
  // }

  return (
    <section className="sign_in_area bg_color sec_pad">
      <div className="container">
        <div className="sign_info">
          <div className="row">
            <div className="col-lg-5">
              <div className="sign_info_content">
                <h3 className="f_p f_600 f_size_24 t_color3 mb_40">First time here?</h3>
                <h2 className="f_p f_400 f_size_30 mb-30">Join now and get<br /> <span className="f_700">20% OFF</span> for all <br /> posts.</h2>
                <ul className="list-unstyled mb-0">
                  <li><i className="ti-check"></i> Free Features</li>
                  <li><i className="ti-check"></i> Unlimited User Accounts</li>
                </ul>
                <button type="button" className="btn_three sign_btn_transparent"><Link className='nav-link fs' to="../SignUp">Sign Up</Link></button>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="login_info">
                <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Sign In</h2>

                <form action="/#" className="login-form sign-in-form">
                  <div className="form-group text_box">
                    <label className="f_p text_c f_400">Email</label>
                    <input
                      type="text"
                      placeholder="shipshare@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-group text_box">
                    <label className="f_p text_c f_400">Password</label>
                    <input
                      type="password"
                      placeholder="**********"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="extra mb_20">
                    <div className="w-100 checkbox remember d-flex justify-content-between">
                      <label>
                        <input type="checkbox" /> Keep me Signed in
                      </label>
                      <Link to="/forgotPassword">Forgot Password?</Link>
                    </div>
                  </div>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <button type="button" className="btn_three fs" onClick={handleOnClick}>Sign in</button>
                                        <div className="social_text d-flex ">
                                            <div className="lead-text">Don't have an account?</div>
                                            <ul className="list-unstyled social_tag mb-0">
                                                <li><a href="https://www.facebook.com"><i className="ti-facebook"></i></a></li>
                                                <li><a href="https://twitter.com/?lang=en"><i className="ti-twitter-alt"></i></a></li>
                                                <li><a href="https://google.com"><i className="ti-google"></i></a></li>
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

export default SignInFrom;