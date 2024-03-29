import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';
import { ToastContainer } from "react-toastify";

const NotFound = () => (
  <div className="body_wrapper">
     <CustomNavbar mClass="menu_four" cClass="custom_container p0" nClass="pl_120 mr-auto ml-auto" hbtnClass="menu_cus" />
     <section className="error_two_area">
      <div className="container flex">
        <div className="error_content_two text-center">
          <img src={require("../img/new/error.png")} alt="" />
          <h2>Error. We can’t find the page you’re looking for.</h2>
          <p>
            Sorry for the inconvenience. Go to our homepage or check out our
            latest collections for Fashion, Chair, Decoration...{" "}
          </p>

          {/* <form action="#" className="search">
            <input type="text" className="form-control" placeholder="search" />
          </form> */}

          <a href="/" className="about_btn btn_hover">
            Back to Home Page <i className="arrow_right"></i>
          </a>

        </div>
      </div>
    </section>
    <Footer FooterData={FooterData} />
    <ToastContainer position="top-right" />
  </div>
);
export default NotFound;
