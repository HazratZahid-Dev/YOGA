import React from "react";
import "../compunentsStyle/Footer.css";
import {
  FaDove,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="first__part ">
        <h1 className="footer__heading">
        
          Please get in touch to find out
          <br /> more about our services
        </h1>
        <button type="button" className="First__btn">
          CONTACT US
        </button>
      </div>

      <div className="second__part ">
        <div>
          <div className=" partsOfFooter">
            <div className="footer__logo">
              <FaDove className="mt-1 text-green-500" />
              <h1>
                <span className="text-green-500">CONSU</span>LENZA
              </h1>
            </div>
            <p className="LogoPara">
              Lorem ipsum dolor sit amet, consectetur
              <br /> adipiscing elit,
            </p>
            <button type="button" className="footer__btn">
              <FaFacebookF />
            </button>
            <button type="button" className="footer__btn">
              <FaTwitter />
            </button>
            <button type="button" className="footer__btn">
              <FaInstagram />
            </button>
          </div>
        </div>

        <div className="partsOfFooter">
          <h3 className=" text-white font-bold ">Quick Links</h3>
          <p>Home</p>
          <p>Aur Approuch</p>
          <p>About</p>
          <p>Services</p>
          <p>Why Choose Us</p>
          <p>Team</p>
          <p>Events</p>
          <p>FAQS</p>
          <p>News</p>
        </div>
        <div className= "partsOfFooter">
          <h3 className="text-white  font-bold ">Get in Touch</h3>
          <p className=" getPara ">
            <FaPhone className=" getIcons " />
            03369454688
          </p>
          <p className="getPara">
            <FaEnvelope className="getIcons" />
            zahid@gmail.com
          </p>
          <p className="getPara">
            <FaMapMarkerAlt className="getIcons" />
            Board bazar Peshawar
          </p>
        </div>

        <div className="partsOfFooter">
          <h3 className="text-white  font-bold">New Letter</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          <input type="text" placeholder="Name" className="inputName "></input>
          <br />

          <input type="text" placeholder="Email" className="inputName"></input>
          <br />
          <button type="button" className="Subscribe">
            Subscribe
          </button>
        </div>
      </div>
      {/* <hr/> */}
      <div className="w-[100%] bg-black text-center text-sm text-gray-500 ">
        <hr className="bg-white" />
        <p>CopyRight@zahid2022</p>
      </div>
    </div>
  );
};

export default Footer;
