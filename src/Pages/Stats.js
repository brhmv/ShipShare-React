import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';
import CustomNavbar from '../components/CustomNavbar';
import { ToastContainer } from 'react-toastify';

function Stats() {

    return (
        <div className='privacy'>
             <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus" />

            {/* <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Statistics" Pdescription="-----------------------" /> */}

            <br />

            <h1>All Over The World</h1>

            <img className="dot_img" src={require('../img/stats/stat2.PNG')} alt="afe" />

            <hr />

            <h1>Users</h1>
            <br />


            <img className="dot_img" src={require('../img/stats/stats.PNG')} alt="aewaef" />

            <hr />

            <h1>Social</h1>
            <img className="dot_img" src={require('../img/stats/stats3.PNG')} alt="aef" />


            <Footer FooterData={FooterData} />
            <ToastContainer/>
        </div >
    );
}

export default Stats;