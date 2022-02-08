import { observer } from "mobx-react-lite";
import React from "react";
import PersonStore from "../../stores/PersonStore";
import Table from "./Table";

const TableContainer = () => {
  return (
    <>
      <Table personList={PersonStore.personList} />
    </>
  );
};

export default observer(TableContainer);
