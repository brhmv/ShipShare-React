import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signUpAsync } from '../Store/AuthSlice';


const SignUpForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUpSuccess = useSelector((state) => state.auth.isAuthenticated);

    useEffect(() => {
        console.log("signUpSuccess changed:", signUpSuccess);

        if (signUpSuccess) {
            console.log("useeffect signUp success");
            navigate('/home');
        }
    }, [signUpSuccess, navigate]);

    const handleOnClick = async () => {
        alert('Sign Up Success');
        console.log("handle on click started");
        dispatch(signUpAsync(userName, email, password));
        console.log("handle on click end");
    };

    // const [signUpSuccess, setsignUpSuccess] = useState(false);

    // async function handleOnClick() {
    //     const data = { 'userName': userName, 'email': email, 'password': password }

    // const response = await fetch('https://localhost:7189/api/auth/signUp', {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    // }).catch(err => console.log(err));

    //     const responseData = await response.json();

    //     Cookies.set('accessToken', responseData.accessToken, { expires: new Date(responseData.expiration) });

    //     console.log(responseData);

    //     setsignUpSuccess(true);

    //     navigate('/home');
    // }

    return (
        <section className="sign_in_area bg_color sec_pad">
            <div className="container">
                <div className="sign_info">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="sign_info_content">
                                <h3 className="f_p f_600 f_size_24 t_color3 mb_40">Allready have an account?</h3>
                                <h2 className="f_p f_400 f_size_30 mb-30">Login now and<br /> starting using our <br /><span className="f_700">amazing</span> posts.</h2>

                                <ul className="list-unstyled mb-0">
                                    <li><i className="ti-check"></i> Free Features</li>
                                    <li><i className="ti-check"></i> Unlimited User Accounts</li>
                                </ul>

                                <button type="submit" className="btn_three sign_btn_transparent"><Link to="../SignIn">Sign In</Link></button>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="login_info">
                                <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Sign Up</h2>
                                <form action="#" className="login-form sign-in-form">

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Username</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Name"
                                            value={userName}
                                            onChange={e => setUserName(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Email Address</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="shipshare@gmail.com"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Password</label>
                                        <input
                                            type="password"
                                            required
                                            placeholder="******"
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                    </div>

                                    <div className="extra mb_20">

                                        <div className="checkbox remember">
                                            <label>
                                                <input type="checkbox" /> I agree to terms and conditions of this website
                                            </label>
                                        </div>

                                        <div className="forgotten-password">
                                            <a href="/#">Forgot Password?</a>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <button type="submit" className="btn_three" onClick={handleOnClick}>Sign Up</button>

                                        <div className="social_text d-flex ">
                                            <div className="lead-text">Or Sign up Using</div>
                                            <ul className="list-unstyled social_tag mb-0">
                                                <li><a href="/https://www.facebook.com"><i className="ti-facebook"></i></a></li>
                                                <li><a href="/https://twitter.com/?lang=en"><i className="ti-twitter-alt"></i></a></li>
                                                <li><a href="/https://google.com"><i className="ti-google"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    {signUpSuccess && (
                                        <div className="alert alert-success mt-3 bg-success f_600" role="alert">
                                            You have successfully signed in!
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SignUpForm;