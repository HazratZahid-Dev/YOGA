import React from "react";
import "../compunentsStyle/TopNav.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaRegCommentAlt,
} from "react-icons/fa";

const NavTop = () => {
  return (
    <div className="Nav__top ">
      <div className="number__icons">
        <p className="flex gap-2  text-white">
      
          <FaPhone className="mt-1" /> 03369454688
        </p>
        <p className="flex gap-2  text-white">
       
          <FaRegCommentAlt className="mt-1"  />
          hazratzahid11@gmail.com
        </p>
      </div>
      <div className=" icons__div">
        <div className="inner__icons ">
       
          <FaFacebookF className="mt-2" />
        </div>

        <div className="inner__icons">
       
          <FaInstagram className="mt-2" />
        </div>
        <div className="inner__icons ">
          
          <FaTwitter className="mt-2" />
        </div>
      </div>
    </div>
  );
};

export default NavTop;
