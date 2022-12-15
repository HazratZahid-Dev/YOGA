import React from "react";
import image from "../images/y10.avif";
import target from "../images/y11.jpg";
import Quality from "../images/y12.png";
import Amazing from "../images/amazing.png";
import Emergency from "../images/y13.png";
import '../Style/PagesStyle/ThirdPart.css'

const ThirdPart = () => {
  return (
    <div className=" p-20 flex flex-wrap gap-32   w-[100%]  justify-center">
      <div>
        <img src={image} className="shadow-none rounded-none w-[350px]"></img>
      </div>
      <div>
        <h1 className="welcome">Welcom to Our Yoga Club</h1>
        <p className="text-gray-800 mt-5 ">
          This is our first Yoga club in Peshawar Kpk. This is our first Yoga club in Peshawar Kpk
        </p>
        <div>
          <div className="welcome__part">
            <div>
              <div className="flex gap-2">
                <img
                  src={target}
                  className="w-[35px] h-[35px] rounded-none shadow-none"
                ></img>
                <h4 className="text-xl font-bold">Best Trainer</h4>
              </div>
              <p className="welcome__para">
                The borders of the letters may
                <br /> be irregular, or the letter surface may
                <br /> be textured
              </p>
            </div>
            <div>
              <div className="flex gap-2">
                <img
                  src={Quality}
                  className="w-[35px] h-[35px] rounded-none shadow-none"
                ></img>
                <h4 className="text-xl font-bold">Quality Services</h4>
              </div>

              <p className="welcome__para">
                The borders of the letters may
                <br /> be irregular, or the letter surface may
                <br /> be textured
              </p>
            </div>
          </div>

          <div className="welcome__part">
            <div>
              <div>
                <div className="flex gap-2">
                  <img
                    src={Amazing}
                    className="w-[35px] h-[35px] rounded-none shadow-none"
                  ></img>
                  <h4 className="text-xl font-bold">Amazing Classes</h4>
                </div>

                <p className="welcome__para">
                  The borders of the letters may
                  <br /> be irregular, or the letter surface may
                  <br /> be textured
                </p>
              </div>
            </div>
            <div>


            <div >
              <div className="flex gap-2">
                <img
                  src={Emergency}
                  className="w-[35px] h-[35px] rounded-none shadow-none"
                ></img>
                <h4 className="text-xl font-bold">Emergency Care</h4>
              </div>

              <p className="welcome__para">
                
                The borders of the letters may
                <br /> be irregular, or the letter surface may
                <br /> be textured
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPart;
