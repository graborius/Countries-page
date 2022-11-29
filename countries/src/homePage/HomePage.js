import React, { useEffect, useState } from "react";
import HomePageItem from "./HomePageItem";
import "./homePage.css";

function HomePage() {
  const [europe, setEurope] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/region/europe")
      .then((res) => res.json())
      .then((europe) => {
        setEurope(europe);
      });
  }, []);

  return (
    <div className="countries-wrapper">
      <h1 className="title">Countries of Europe</h1>
      <div className="countries-item">
        {europe.map((city, index) => (
          <HomePageItem
            key={index}
            region={city.subregion}
            cityName={city.name.common}
            capital={city.capital}
            continents={city.continents}
            languages={city.languages}
            population={city.population}
            borders={city.borders}
            flag={city.flags}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
 