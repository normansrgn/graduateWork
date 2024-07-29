import { Component } from "react";

import "./usemodal.scss";

function UseModal(isOpen, onClose) {
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal__wrapper">
            <div className="modal__content">
              <button className="modal__closeBtn" onClick={onClose}>
                SDSDSD
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UseModal;
