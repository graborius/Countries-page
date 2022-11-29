import React, { useState, useEffect } from "react";
import "./search.css";

let titleText = `About Country:`;

const SearchCountries = () => {
  const [countries, setCountries] = useState("");
  const [name, setName] = useState(null);
  const [flag, setFlag] = useState("");
  const [subregion, setSubregion] = useState("");
  const [population, setPopulation] = useState("");
  const [capital, setCapital] = useState("");
  const [input, setInput] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    setCountries(event.target.elements.country.value);
    event.target.reset();
  };

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countries} `)
      .then((response) => response.json())
      .then((Data) => {
        if (Data.message) {
          return;
        } else {
          setName(Data[0].name.common);
          setFlag(Data[0].flags.svg);
          setSubregion(Data[0].subregion);
          setPopulation(Data[0].population);
          setCapital(Data[0].capital);
          setInput(false);
        }
      });
  }, [countries]);

  return (
    <div className="search-form">
      <div className="search-wrapper">
        <h1 className="search-title">{titleText}</h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            id="country"
            placeholder="Enter country.... "
          ></input>
          <input className="search-button" type="submit" value="Search"></input>
        </form>
      </div>

      <div className="search-text">
        <h2 className="search-title"> {name} </h2>

        {input ? (
          "Your Country..."
        ) : (
          <div>
            <h3 className="text">
              {name} is in of {subregion}.And the capital is {capital}.{name}{" "}
              population is about {population} people.
            </h3>
            <img className="search-flag" alt="country-flag" src={flag}></img>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchCountries;
