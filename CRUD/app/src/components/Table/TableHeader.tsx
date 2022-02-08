import React from "react";

const TableHeader = () => {
  return (
    <div className="TableRow">
      <div className="TableRow__column">Имя</div>
      <div className="TableRow__column">Никнейм</div>
      <div className="TableRow__column">Возраст</div>
      <div className="TableRow__column">Пол</div>
      <div className="TableRow__column">Действия</div>
    </div>
  );
};

export default TableHeader;
