import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import FlagsItem from "./FlagsItem";
import "./flags.css";

const Flags = () => {
  const [europe, setEurope] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/region/europe")
      .then((res) => res.json())
      .then((europe) => {
        setEurope(europe);
      });
  }, []);

  return (
    <>
      <div className="flags-page-title">
        <h1 className="page-text">Flags of ES</h1>
      </div>
      <div className="flags-wrapper">
        {europe.map((flag, index) => (
          <FlagsItem key={index} flag={flag.flags} flagName={flag.name} />
        ))}
      </div>
    </>
  );
};

export default Flags;
