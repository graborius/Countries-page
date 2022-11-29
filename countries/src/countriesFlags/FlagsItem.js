import React from "react";
import "./flags.css";

const FlagsItem = (props) => {
  const flag = (
    <img className="flag-page" alt="countries flags" src={props.flag.svg}></img>
  );
  const country = props.flagName.common;

  return (
    <div className="flags-item">
      <h2 className="flag-title">{country}</h2>
      <div className="flag-item">{flag}</div>
    </div>
  );
};

export default FlagsItem;
