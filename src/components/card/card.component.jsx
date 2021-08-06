import React, { useState } from "react";
//STYLES
import "./card.styles.scss";
//COMPONENTS
import Modal from "../modal/modal.component";

const Card = (props) => {
  //MODAL STUFF
  const [showModal, setShowMOdal] = useState(false);

  const modal = () => {
    setShowMOdal(!showModal);
  };
  return (
    <div>
      <Modal
        name={props.name}
        status={props.status}
        modalStatus={showModal}
        hideModal={modal}
        img={props.img}
        specie={props.specie}
        location={props.location}
        gender={props.gender}
      />
      <div className="container">
        <div className="card" onClick={modal}>
          <div>
            <img className="cardImage" src={props.img} alt="" />
          </div>
          <div className="content">
            <h2>{props.name}</h2>
            <h3
              className={`
                ${props.status.toLowerCase() === "alive" ? "alive" : "dead"}
            `}
            >
              {props.status}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
