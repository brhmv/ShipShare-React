import React from "react";
import Map from "./Map";
const EventLocation = () => {
  return (
    <section className="event_location_area">
      <Map />
      <div className="container">
        <div className="event_location">
          <div className="contact_info_item">
            <h6>Location</h6>
            <p>
              70 Koroğlu Rəhimov, Bakı 1009 <br />
            </p>
          </div>
          <div className="contact_info_item">
            <h6>Contact Info</h6>
            <p>
              <a href="mailto:shipshare@gmail.com">shipshare@gmail.com</a>
            </p>
            <p>
              <a href="tel:3024437488">(+096) 302 443 7488</a>
            </p>
          </div>
          <div className="f_social_icon_two">
            <a href="/#">
              <i className="ti-facebook"></i>
            </a>
            <a href="/#">
              <i className="ti-twitter-alt"></i>
            </a>
            <a href="/#">
              <i className="ti-vimeo-alt"></i>
            </a>
            <a href="/#">
              <i className="ti-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EventLocation;
