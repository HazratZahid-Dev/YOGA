import React from "react";
import PopularData from "../Config/PopularData";
import "../compunentsStyle/PopularCard.css";

import { BsClock } from "react-icons/bs";

const PopularCard = () => {
  return (
    <div className="w-auto p-4 gap-10 justify-center    m-auto ">
      {PopularData.map((it) => (
        <div>
          <div className="Popular__card">
            <div className="day__month">
              <h1 className="day">{it.day}</h1>
              <p className="text-sm">{it.month}</p>
            </div>

            <div>
              <img
                src={it.images}
                alt="error"
                className="Popular__Card__image"
              ></img>
            </div>

            <div className="p-4">
              <h2 className="Popular__header">{it.header}</h2>
              <p className="flex gap-1 text-sm mt-1">
                <BsClock className="text-pink-500 mt-1 " /> {it.time}
              </p>
              <p className="Popular__para ">{it.para}</p>
              <div className="flex  mb-5">
                <button className=" view__btn">View Detail</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularCard;
