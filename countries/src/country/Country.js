import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./country.css";

let titleText = `About Country:`;

const Country = () => {
  const [country, setCountry] = useState([]);
  const [official, setOfficial] = useState([]);
  const [subregion, setSubregion] = useState([]);
  const [flag, setFlag] = useState([]);
  const [capital, setCapital] = useState([]);
  const [population, setPopulation] = useState([]);

  let params = useParams();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/alpha/" + params.cca2)
      .then((res) => res.json())
      .then((europe) => {
        setCountry(europe[0].name.common);
        setOfficial(europe[0].name.official);
        setSubregion(europe[0].subregion);
        setFlag(europe[0].flags.svg);
        setCapital(europe[0].capital);
        setPopulation(europe[0].population);
      });
  }, []);

  return (
    <div className="country-wrapper">
      <h1 className="country-title">{titleText}</h1>
      <h2 className="country-text">({official}) </h2>
      <h3 className="country-text">
        {" "}
        {country} is in of {subregion}.And the capital is {capital}.{country}{" "}
        population is about {population} people.
      </h3>
      <img className="set-flag" src={flag}></img>
    </div>
  );
};

export default Country;
