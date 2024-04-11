// import { useState } from "react";
import "./App.css";
import HelloWorld from "./components/HelloWorld"; // Importe le composant HelloWorld
import PasswordGenerator from "./components/PasswordGenerator";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <HelloWorld />
      <PasswordGenerator />
    </>
  );
}

export default App;
