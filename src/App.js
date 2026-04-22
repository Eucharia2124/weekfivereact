import React from "react";
import "./App.css";
import Weather from "./Weather"

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lisbon" />
      <footer>
        This project was coded by <a href="https://github.com/Eucharia2124/weekfivereact" target="_blank" rel="noopener noreferrer">Obiageria</a>{" "} and is {" "}<a href="https://github.com/Eucharia2124/weekfivereact" target="_blank" rel="noopener noreferrer">open-source on GitHub</a>
        {" "}and is {" "}hosted on <a href="https://week6projec.netlify.app/" target="_blank" rel="noopener noreferrer">Netlify</a>. 
      </footer>
    </div>
    </div>
  );

}

