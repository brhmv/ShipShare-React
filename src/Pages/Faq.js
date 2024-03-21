import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';
import useTokenExpiration from '../customHooks/useTokenExpiration';
import { ToastContainer } from 'react-toastify';

const Faq = () => {
    useTokenExpiration();
    return (
        <div className="body_wrapper">
             <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus" />

            {/* <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="FAQ" Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!" /> */}

            <FaqSection />

            <Footer FooterData={FooterData} />
            <ToastContainer/>
        </div>
    )
}
export default Faq;