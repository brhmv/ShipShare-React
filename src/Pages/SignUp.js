import React, { useState } from "react";
import CustomNavbar from "../components/CustomNavbar";
import SignUpForm from "../components/SignUpForm";
import Footer from "../components/Footer/Footer";
import FooterData from "../components/Footer/FooterData";
import { ToastContainer } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="body_wrapper">
      {isLoading && (
        <div className="Loading">
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
      <CustomNavbar
        mClass="menu_four"
        cClass="custom_container p0"
        nClass="pl_120 mr-auto ml-auto"
        hbtnClass="menu_cus"
      />

      <SignUpForm setIsLoading={setIsLoading} />

      <Footer FooterData={FooterData} />
      <ToastContainer />
    </div>
  );
};
export default SignUp;
