import React from "react";
//STYLES
import "./button1.styles.scss";
//SCROLL
import { Link } from "react-scroll";

const Button1 = (props) => {
  return (
    <Link
      className="btn btnBlurry"
      to="infoSection"
      href="infoSection"
      id="btnBlurry"
      data-speed="0.2"
      behavior={"smooth"}
    >
      {props.children}
    </Link>
  );
};

export default Button1;
