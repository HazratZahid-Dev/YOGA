import React, { useState } from "react";
import test from "../images/y2.jpg";
import "../Style/PagesStyle/Testimonail.css";

import { FaPlus } from "react-icons/fa";
import { BsDash } from "react-icons/bs";

const Testimonial = () => {
  // const [show,setShow]=useState(false)
  
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
      setActiveIndex(index);
    };
  
  return (
    <div>
      <div className="main__testimonail ">
        <div className="testimonail">
          <h1>Testimonial</h1>
          <div className="testimonail__inner ">
            <img src={test} className="test__img"></img>
            <p className="testimonail__para ">
              In literary theory, a text is any object that can be "read",
              whether this object is a work of literature, a street sign, an
              arrangement of buildings on a city block, or styles of clothing.
              an arrangement of buildings on a city block, or styles of
              clothing. an arrangement of buildings on a city block, or styles
              of clothing.{" "}
            </p>
            <h6 className=" mt-2 ">Leo</h6>
            <p className="font-normal text-sm">Employee</p>
          </div>
        </div>
        <div className="Question ">
          <h2 className="mt-4">Frequently Asked Question</h2>
          <div className="underline"></div>
          <div className="bg-pink-100 p-7 mt-7">
            <p className="text-sm flex">
              <BsDash className="mt-1 text-xl" /> How much do a bussniss plane
              cost ?
            </p>
            <p className="font-normal text-sm leading-6 mt-6">
              It is long established fact that a reader will be disracted by the
              readable content of the page when looking at its layout
            </p>

            {/* <div className="leading-6 mt-4">
           <hr/>
            <p className="flex gap-2 font-bold text-sm p-1" onClick={(e)=>setShow(!show)}><FaPlus  className="mt-1 text-pink-600 "/>Do you provided client reference ? </p>
            {show ? <p className="text-sm ml-4  font-normal">I provide a clients reference to you at time</p>:""}
            <hr/>
           
            <p className="flex gap-2 font-bold text-sm p-1 " onClick={(e)=>setShow(!show)}> <FaPlus className="mt-1 text-pink-600 "/>Do i contact some of your former client ?</p>
            {show ? <p className="text-sm ml-4  font-normal">Yes why not i contact of my farmer clients</p>:""}
            <hr/>
            <p className="flex gap-2 font-bold text-sm p-1"> <FaPlus className="mt-1 text-pink-600 "/>How much deos bussniss plane cost ?</p>
          </div> */}

            <div>
              <p onClick={() => handleClick(0)} className="flex gap-2 font-bold text-sm p-1">  <FaPlus className="mt-1 text-pink-600 "/> Do you provide clients reference ?</p>
              {activeIndex === 0 && <div  className="text-sm ml-4  font-normal">Yes i provide client reference to you</div>}
              <p onClick={() => handleClick(1)} className="flex gap-2 font-bold text-sm p-1"> <FaPlus className="mt-1 text-pink-600 "/> Can i contact some of your former client ?</p>
              {activeIndex === 1 && <divl  className="text-sm ml-4  font-normal">Yes you can contact of my former clients regularly.</divl>}
              {/* <p onClick={() => handleClick(1)} className="flex gap-2 font-bold text-sm p-1"> <FaPlus className="mt-1 text-pink-600 "/> How much deos a bussninss plane cost ?</p> */}
              {/* {activeIndex === 0 && <divl>Content for section 2 goes here</divl>} */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
