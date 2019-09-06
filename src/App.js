import React from "react";
import "./App.css";
import ImagensTest from "./assets/imgTest.png";
import TechList from "./components/TechList";

function App() {
  return (
    <div>
      <h1>Hello Rocketseat</h1>
      <img width="200" src={ImagensTest} />
      <TechList />
    </div>
  );
}

export default App;
