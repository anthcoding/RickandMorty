import React from "react";

//STYLES
import "./modal.styles.scss";
const Modal = (props) => {
  return (
    <div
      className="backdrop"
      style={{
        opacity: props.modalStatus ? "1" : "0",
        transform: props.modalStatus ? "translateY(0)" : "translateY(-700vh)",
      }}
      onClick={props.hideModal}
    >
      <div
        className="modal"
        style={{
          opacity: props.modalStatus ? "1" : "0",
          transform: props.modalStatus ? "translateY(0)" : "translateY(-20vh)",
        }}
      >
        <img className="modalImg" src={props.img} alt="" />
        <div className="infoContainer">
          <div className="infoRows">
            <h1>{props.name}</h1>
          </div>
          <div className="infoRowsContainer">
            <div className="infoRows">
              <span>Status: </span>
              <h3
                className={`
                    ${props.status.toLowerCase() === "alive" ? "alive" : "dead"}
                `}
              >
                {" "}
                {props.status}
              </h3>
            </div>

            <div className="infoRows">
              <span>Specie: </span>
              <h3> {props.specie}</h3>
            </div>

            <div className="infoRows">
              <span>Gender: </span>
              <h3> {props.gender}</h3>
            </div>

            <div className="infoRows">
              <span>Planet: </span>
              <h3> {props.location}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
