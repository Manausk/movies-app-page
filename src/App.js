import React, { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";

//251a7720

const API_URL = "http://www.omdbapi.com?apikey=251a7720";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&S=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
    </div>
  );
};

export default App;
