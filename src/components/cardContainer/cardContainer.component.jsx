import React from "react";
//STYLES
import "./cardContainer.styles.scss";
//COMPONENTS
import Card from "../card/card.component";

const CardContainer = (props) => {
  return (
    <div className="cardContainer">
      {props.characters
        .filter((character, idx) => idx < 15)
        .map((character) => {
          return (
            <Card
              key={character.id}
              name={character.name}
              img={character.image}
              status={character.status}
              specie={character.species}
              location={character.location.name}
              gender={character.gender}
            />
          );
        })}
    </div>
  );
};

export default CardContainer;
