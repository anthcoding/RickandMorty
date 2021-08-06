import React from "react";
//STYLES
import "./home.styles.scss";
//COMPONENTS
import Stars from "../../ui/stars/stars.component";

import Button1 from "../../components/buton1/buton1.component";

//IMAGES
import Welcome from "../../assets/img/logo.png";
import Crater from "../../assets/img/crater.png";
import Ship from "../../assets/img/ship.png";
import Moon from "../../assets/img/moon.png";
import Earth from "../../assets/img/earth.png";

const Home = (props) => {
  //PARALLAX EFECT WITH MOUSE
  const parallax = (e) => {
    document.querySelectorAll(".img").forEach((element) => {
      const speed = element.getAttribute("data-speed");

      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;

      element.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  };

  document.addEventListener("mousemove", parallax);

  //PARALAX EFFECT WITH SCROLL
  const home = document.getElementsByClassName("home");
  const homeHeight = home.offsetHeight;

  const scroll = (e) => {
    const translate = document.querySelectorAll(".translate");

    const rM = document.querySelector(".rM");
    const shadow = document.querySelector(".shadow");

    window.addEventListener("scroll", () => {
      let scroll = window.pageYOffset;

      translate.forEach((element) => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(-${scroll * speed}px)`;
      });
      rM.style.opacity = -scroll / (homeHeight / 2) + 1;
      shadow.style.height = `${scroll * 0.5 + 300}px`;
    });
  };

  document.addEventListener("scroll", scroll);

  return (
    <div className="home">
      <Stars />
      <div className="rickaAndMortyPresentationContainer">
        <img className="logoImg img rM" data-speed="2" src={Welcome} alt="" />
      </div>
      <img className="ship img " data-speed="2" src={Ship} alt="" />
      <img className="moon img " data-speed="-3" src={Moon} alt="" />
      <img className="earth img " data-speed="1" src={Earth} alt="" />
      <div className="btnContainer ">
        <Button1>get schwifty !</Button1>
      </div>
      <img className="crater translate" data-speed="0.2" src={Crater} alt="" />
      <div className="shadow"></div>
    </div>
  );
};

export default Home;
