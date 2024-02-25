import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Teams from '../components/Team/Team';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';

const Team = () => {
    return (
        <div className="body_wrapper">
            <CustomNavbar mClass="menu_four" nClass="w_menu ml-auto mr-auto" />

            <Breadcrumb breadcrumbClass="breadcrumb_area breadcrumb_area_three" imgName="Img-05.jpg" Ptitle="Our Team" Pdescription="Shipshare have talented and hardworking team!" />

            <Teams />

            <Footer FooterData={FooterData} />
        </div>
    )
}
export default Team;