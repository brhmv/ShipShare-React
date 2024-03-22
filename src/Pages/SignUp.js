import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import SignUpForm from '../components/SignUpForm';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';
import { ToastContainer } from 'react-toastify';

const SignUp = () => {

    // const [navKey, setNavKey] = useState(0);

    // const reloadNavbar = () => {
    //     setNavKey(prevKey => prevKey + 1);
    // };

    return (
        <div className="body_wrapper">
             <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus" />

            {/* <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Sign Up" Pdescription="---------" /> */}

            <SignUpForm />

            <Footer FooterData={FooterData} />
            <ToastContainer/>
        </div>
    )
}
export default SignUp;