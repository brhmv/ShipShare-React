import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';
import useTokenExpiration from '../customHooks/useTokenExpiration';
import { ToastContainer } from 'react-toastify';

const About = () => {
    useTokenExpiration();
    return (
        <div className="body_wrapper">
             <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus" />

            <br />

            <h1>Send anywhere, travel everywhere</h1>

            <br />

            <div className='container process_area bg_color ' >

                <h3 >
                    Having lived in eight cities around the world, founders <strong>Allahverdi Ibrahimov</strong> and <strong>Islam Salamzade</strong> found themselves longing for everything they enjoyed abroad but could no longer find in their new home of San Francisco. They quickly discovered that others felt the same.
                    Inspired by their shared passion for travel, they created ShipShare, a trusted peer-to-peer community marketplace connecting shoppers and travelers all around the world. </h3>

                <br />

                <h3>With ShipShare, shoppers gain access to the products they love, want and can't get otherwise with a little help from travelers heading their way.</h3>

                <br />

                <h3>ShipShare offers a faster and friendlier way to shop the globe, and at the same time, empowers travelers to monetize extra space in their suitcases.</h3>

                <br />

                <h3>Our travelers usually deliver a handful of items and earn upwards per trip. Not only will you make money traveling, you'll meet amazing locals along the way.</h3>
            </div>


            <Footer FooterData={FooterData} />
            <ToastContainer/>
        </div>
    )
}
export default About;