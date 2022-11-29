//import logo from './logo.svg';
import "./App.css";

import { Route, Routes } from "react-router-dom";
import HomePage from "./homePage/HomePage";
import Navigation from "./navigation/Navigation";
import Countries from "./countries/Countries";
import Country from "./country/Country";
import Flags from "./countriesFlags/CountriesFlags";
import SearchCountries from "./searchCountries/SearchCountries";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/:cca2" element={<Country />} />
        <Route path="/flags/" element={<Flags />} />
        <Route path="/search/" element={<SearchCountries />} />

        <Route path="*" element={<h1>404 error.Page not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
