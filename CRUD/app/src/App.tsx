import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import PersonTableContainer from "./components/Table/PersonTable/PersonTableContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <PersonTableContainer />
    </div>
  );
}

export default App;
