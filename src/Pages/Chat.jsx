import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import { Link, useParams } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

function UserView() {
    const { userId } = useParams();



    return (
        <div className='privacy'>
            <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus" />

            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Chat" Pdescription="------" />




            <Footer FooterData={FooterData} />
        </div >
    );
}

export default UserView;