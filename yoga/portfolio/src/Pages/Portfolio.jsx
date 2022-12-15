// import React, { useState } from "react";
// import Modal from "../Compunents/Modal";
// import data from "../Config/Data";
// import "../Style/PagesStyle/Portfolio.css";
// //  import video from '../images/p9.avif';

// const Portfolio = () => {
//   const [show,setShow]=useState(false)
//   return (
//     <div>
//       <div className="port__First__part">
//         <div className="Port__left">
//           <h1 className="port__left__heading">
//             The Best Services
//             <br /> <span className="We">We Provided</span>
//           </h1>
//           <p className="port__left__para">
//             As a Software House that designs and develops website, mobile apps,
//             and UI/UX design, we have been trusted by our clients from all
//             around the world.
//           </p>
//           <button type="button" className="left__btn">
//             Contact Us
//           </button>
//         </div>
//         <div className="port__right">
//           {/* image part */}
//         </div>
//       </div>

//       <div className="bg-black ">
//         <h1 className="port__top">Our Projects</h1>
//         <p className="port__top__para">
//           We are ready to scale up your business with our great work result.
//         </p>
//       </div>
//       <div className="port__main flex flex-wrap gap-5">
//         {data.map((it) => {
//           return (
//             <div className="port__card flex flex-wrap">
//               <div className=" flex-wrap ">
//                 <img src={it.pic} className="card__img" onClick={()=>setShow(true)}></img>
//                 <h2 className="card__heading">{it.heading}</h2>
//                 <h2 className="card__para">{it.app}</h2>
//               </div>
//             </div>
//           );
//         })}
      
//       </div>
//       <Modal show={show} className="Modal" onClose={()=>setShow(false)}/>
//     </div>
//   );
// };

// export default Portfolio;
