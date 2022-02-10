import { observer } from "mobx-react-lite";
import React from "react";
import "./App.css";
import Header from "./components/Header/Header";

import Table from "./components/Table/PersonTable/PersonTableContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <Table />
    </div>
  );
}

export default observer(App);
