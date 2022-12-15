import React from "react";
import "../Style/partner.css";

import {
  FaMonero,
  FaBahai,
  FaCertificate,
  FaBell,
  FaGratipay,
} from "react-icons/fa";

const PartNer = () => {
  return (
    <div className="main__partner">
      <div className="Partner__heading">
        <h1 className="partner__heading">Partners WorldWide</h1>
        <p className="partner__secondheading">
          Partners world wide world wide world wide partners world wide
        </p>
      </div>
      <div className="icon__part p-5">
        <div>
          <FaMonero className="second__partIcons" />
          <h1 className="font-bold text-xl">MARCURIA</h1>
          <p className="text-sm">MARCURIA designing partIcons</p>
        </div>
        <div>
          <FaBahai className="second__partIcons" />
          <h1 className="font-bold text-xl">GENISISCO</h1>
          <p className="text-sm">GENISISCO designing </p>
        </div>
        <div>
          <FaCertificate className="second__partIcons" />
          <h1 className="font-bold text-xl">REXICOSIA</h1>
          <p className="text-sm">REXICOSIA designing </p>
        </div>
        <div>
          <FaBell className="second__partIcons" />
          <h1 className="font-bold text-xl">RETROMAX</h1>
          <p className="text-sm">RETROMAX designing </p>
        </div>

        <div>
          <FaGratipay className="second__partIcons" />
          <h1 className="font-bold text-xl">RETROMAX</h1>
          <p className="text-sm">RETROMAX designing </p>
        </div>
      </div>
    </div>
  );
};

export default PartNer;
