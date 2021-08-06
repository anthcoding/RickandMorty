import React, { useState, useEffect } from "react";
//STYLES
import "./infoSection.styles.scss";
//AXIOS
import axios from "axios";
//COMPONENTS
import SearchBox from "../../components/searchBox/searchBox.component";
import CardContainer from "../../components/cardContainer/cardContainer.component";
import Spinner from "../../components/spinner/spinner.component";
//IMAGE
import Footer from "../../assets/img/footer.png";

const InfoSection = (props) => {
  //ALL CHARACTERS
  const [characters, setCharacters] = useState([]);
  //INFO
  const [snapshot, setSnapshot] = useState({});
  //NAVIGATION AND FETCHING
  const [filteredName, setFilteredName] = useState("");
  const [pages, setPages] = useState(1);
  const direction = `https://rickandmortyapi.com/api/character/?name=${filteredName}&page=${pages}`;

  //RAIN
  useEffect(() => {
    const createRain = () => {
      const gout = document.createElement("div");
      gout.classList.add("gout");
      gout.innerText = "🌢";
      gout.style.right = Math.random() * 100 + "vw";
      gout.style.animationDuration = Math.random() * 2 + 3 + "s";
      document.body.appendChild(gout);
      setTimeout(() => {
        gout.remove();
      }, 5000);
    };
    setInterval(createRain, 250);
  }, []);

  //FETCHING
  useEffect(() => {
    axios
      .get(direction)
      .then((response) => {
        console.log(response);
        setCharacters(response.data.results);
        setSnapshot(response.data.info);
      })
      .catch((error) => {
        setPages(pages - 1);
      });
  }, [direction, pages]);
  console.log(snapshot);
  if (pages <= 0) setPages(1);

  const nextPage = () => {
    setPages(pages + 1);
    if (pages === snapshot.pages) setPages(snapshot.pages);
  };
  const prevPage = () => {
    setPages(pages - 1);
  };

  console.log(filteredName);
  console.log(pages);
  return (
    <div className="infoSection" id="infoSection">
      <SearchBox
        handleChange={(e) => {
          setFilteredName(e.target.value);
          setPages(1);
        }}
      />
      {characters.length > 1 ? (
        <div className="cardBigContainer">
          <CardContainer characters={characters} />
        </div>
      ) : (
        <Spinner />
      )}

      <div className="buttonsContainer">
        <button className="button1" onClick={prevPage}>
          {`<`}
        </button>
        <h3>
          {pages}
          <span>/</span>
          {snapshot.pages}
        </h3>
        <button className="button2" onClick={nextPage}>
          {`>`}
        </button>
      </div>
      <img className="footerImage" src={Footer} alt="" />
      <div className="footerTextContainer">
        <h3>-Anth Lorenzo {new Date().getFullYear()}-</h3>
      </div>
    </div>
  );
};

export default InfoSection;
