import React from "react";
function HomePage(props) {
  const flag = (
    <img className="flag-img" alt="country flag" src={props.flag.svg}></img>
  );
  let homePageCountriesListText = props.borders && (
    <span className="borders-list">
      {props.cityName} shares its borders with:{" "}
    </span>
  );

  return (
    <div className="europe-wrapper">
      <h2 className="europe-title">{props.cityName} </h2>
      <div className="flag-img">{flag} </div>

      <p className="europe-text">
        {props.cityName} is in {props.region}. Population of {props.cityName} is{" "}
        {props.population} people. The capital of {props.cityName} is{" "}
        {props.capital}.{" "}
      </p>

      <div className="borders-wrapper">
        {homePageCountriesListText}
        {props.borders && (
          <ul className="borders-list">
            {props.borders.map((border, index) => (
              <li className="border-list" key={index}>
                {border}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default HomePage;
