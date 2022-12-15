import React from "react";
import NewsData from "../Config/NewsData";
import '../Style/PagesStyle/News.css'

const News = () => {
  return (
    <>
    <div className="News__header">
        <h3 className="see__recent">See Recent News</h3>
        <h1 className="Lates__news">See Our Latest News</h1>
    </div>
      <div className="NewsCard">
        {NewsData.map((it) => (
          <div className="Cards">
            <img src={it.images} className='Card__images'></img>
            <h1 className="Card__header">{it.header}</h1>
            <p className="Card__para">{it.para}</p>
            <hr className="mt-3"/>
            <p className="Card__date">{it.date}</p>
          </div>
       ) )}
      </div>
    </>
  );
};

export default News;
