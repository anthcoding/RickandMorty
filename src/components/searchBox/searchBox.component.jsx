import React from "react";
//STYLES
import "./searchBox.styles.scss";
const SearchBox = (props) => {
  return (
    <input
      className="search"
      type="search"
      placeholder="search characters..."
      onChange={props.handleChange}
    />
  );
};

export default SearchBox;
