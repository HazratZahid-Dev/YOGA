import React from "react";
import "../Style/PagesStyle/Modal.css";
// import { IconName } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Modal = ({ show,onClose }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="Modal">
      <div className="Modal__inner">
        <div className="btn__div">
        <FaTimes className="cross__btn" onClick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
