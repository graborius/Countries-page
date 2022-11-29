import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./countries.css";

const Countries = () => {
  const [europe, setEurope] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/subregion/europe")
      .then((res) => res.json())
      .then((europe) => {
        setEurope(europe);
      });
  }, []);

  return (
    <div className="countries-list-wrapper">
      <h1 className="countries-title">Countries List:</h1>
      <ul className="countries-links-list">
        {europe.map((country, index) => (
          <li className="countries-list-element" key={index}>
            <Link to={"/countries/" + country.cca2}>{country.name.common}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
