import React from "react";
import "./Contact.css";
import mapimg from "../../../assets/map.png";
import contactImg from "../../../assets/maptouch.png"; // Update the path as needed

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact-bg">
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="contact-content">
      <div className="image">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.54586608885!2d72.73989448226327!3d21.159180203496195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1715934472526!5m2!1sen!2sin"
          width="100%"
          height="400"
        ></iframe>
      </div>
        {/* <div className="contact-map"> */}
          {/* <img src={mapimg} alt="Map" /> */}
        {/* </div> */}
        <div className="map-touch">
          <h2>GET IN TOUCH</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan.
          </p>
          <div className="map-touch-content">
            <div className="map-touch-left">
              <img src={contactImg} alt="Contact" />
            </div>
            <div className="map-touch-right">
              <div className="input-row">
                <input type="text" placeholder="Enter your first name" />
                <input type="text" placeholder="Enter your last name" />
              </div>
              <div className="input-row">
                <input type="text" placeholder="Phone number" />
                <input type="email" placeholder="Email address" />
              </div>
              <div className="text-area">
                <textarea placeholder="Your message"></textarea>
              </div>
              <div className="text-btn">
                <button>Send Message</button>
              </div>
            </div>
          </div>
        </div>
        <div className="subscribe">
          <div className="left">
            <p>Subscribe Our </p>
            <p>Newslatter For Weather </p>
            <p>Update</p>
          </div>
          <div className="right">
            <input type="email" className="email-input" placeholder="Email " />
            <input type="phone" className="phone-input" placeholder="Phone " />
            <div className="submit-btn">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
