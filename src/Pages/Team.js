import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Teams from '../components/Team/Team';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';
import useTokenExpiration from '../customHooks/useTokenExpiration';
import { ToastContainer } from 'react-toastify';

const Team = () => {
    useTokenExpiration();
    return (
        <div className="body_wrapper">
              <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus" />
            {/* <Breadcrumb breadcrumbClass="breadcrumb_area breadcrumb_area_three" imgName="Img-05.jpg" Ptitle="Our Team" Pdescription="Shipshare have talented and hardworking team!" /> */}

            <Teams />

            <Footer FooterData={FooterData} />
            <ToastContainer/>
        </div>
    )
}
export default Team;