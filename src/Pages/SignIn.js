import React, { useState } from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import SignInForm from '../components/SignInForm';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';

const SignIn = () => {

    // const [navKey, setNavKey] = useState(0);

    // const reloadNavbar = () => {
    //     setNavKey(prevKey => prevKey + 1);
    // };

    return (
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" />

            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Sign In" Pdescription="----------" />

            <SignInForm />

            <Footer FooterData={FooterData} />
        </div>
    )
}
export default SignIn;