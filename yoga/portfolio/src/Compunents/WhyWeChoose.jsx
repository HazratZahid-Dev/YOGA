import React from "react";
import trainer from '../images/trainer.png'
import obser from '../images/obser.png'
import freedom from '../images/freedom.png'
import side from '../images/y17.jpg'
import '../compunentsStyle/WhyWeChoose.css'

const WhyWeChoose = () => {
  return (
    <div >
      <div  className="why__main ">
        <div className="blue__side">
          <h1 className="why__header">Why We Choose US ?</h1>
          <div className="flex gap-2 mt-6">
            <div>
            <img src={trainer} className='blueSide__img'></img>

            </div>
            <div>
              <h3 className="Icon__header">Most Experience Trainer</h3>
              <p className="text-sm mt-2">
                It is long established fact that a reader will be distracted by
                the readable content of page when looking at the layout
              </p>
            </div>
          </div>

          <div className="flex gap-2 mt-6">
            <div>
            <img src={obser} className='blueSide__img'></img>

            </div>
            <div>
              <h3 className="Icon__header">Deep Oberservation Facility</h3>
              <p className="text-sm  mt-2">
                It is long established fact that a reader will be distracted by
                the readable content of page when looking at the layout
              </p>
            </div>
          </div>

          <div className="flex gap-2 mt-6">
            <div>
            <img src={freedom} className='blueSide__img'></img>

            </div>
            <div>
              <h3 className="Icon__header">Yoga is a way to freedom</h3>
              <p className="text-sm  mt-2">
                It is long established fact that a reader will be distracted by
                the readable content of page when looking at the layout
              </p>
            </div>
          </div>

        </div>
        <div className="image__side ">
            <img src={side} className='w-[100%] ' ></img>
        </div>
      </div>
    </div>
  );
};

export default WhyWeChoose;
