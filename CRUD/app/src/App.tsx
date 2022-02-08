import { observer } from "mobx-react-lite";
import React from "react";
import "./App.css";
import Header from "./components/Header/Header";

import TableContainer from "./components/Table/TableContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <TableContainer />
    </div>
  );
}

export default observer(App);
