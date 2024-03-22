import React, { Component, useEffect } from "react";
import { useSelector } from "react-redux";
import Reveal from "react-reveal/Reveal";
import { Link } from "react-router-dom";

const AgencyBanner = (props) => {
  let BannerData = props.BannerData;

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  useEffect(() => {
    console.log(isAuthenticated);
  },[isAuthenticated])

  return (
    <section className="agency_banner_area bg_color">
      <img
        className="banner_shap"
        src={require("../../img/home4/banner_bg.png")}
        alt=""
      />
      <div className="container custom_container">
        <div className="row">
          <div className="col-lg-5 d-flex align-items-center">
            <div className="agency_content">
              <Reveal effect="fadeInUp">
                {BannerData.AgencyText.map((Agency) => {
                  return (
                    <React.Fragment key={Agency.id}>
                      <h2
                        className="f_700 t_color3 mb_40 wow fadeInLeft"
                        data-wow-delay="0.3s"
                      >
                        Send Anywhere, Travel Everywhere
                      </h2>
                      <p
                        className="f_400 l_height28 wow fadeInLeft"
                        data-wow-delay="0.4s"
                      >
                        ShipShare connects shoppers and travelers who help each
                        other access the world.
                      </p>
                    </React.Fragment>
                  );
                })}
                <div className="action_btn d-flex align-items-center mt_60 ">
                  {!isAuthenticated && <Link
                    to="/SignUp"
                    className="btn_hover agency_banner_btn wow fadeInLeft"
                    data-wow-delay="0.5s"
                  >
                    Sign Up
                  </Link>}
                  <br />
                  <Link
                    to="/SendingProcess"
                    className="btn_hover agency_banner_btn wow fadeInLeft"
                    data-wow-delay="0.5s"
                  >
                    How it works?
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
          <div className="col-lg-7 text-right">
            <Reveal effect="fadeInRight">
              <img
                className="protype_img wow fadeInRight"
                data-wow-delay="0.3s"
                src={require("../../img/home4/banner_img.png")}
                alt=""
              />
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AgencyBanner;
