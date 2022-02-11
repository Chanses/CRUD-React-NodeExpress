import { observer } from "mobx-react-lite";
import React from "react";
import "./Table.css";

interface ITableColumnConfig {
  caption: string;
  width?: string;
}
interface ITableProps {
  /**Рендер-функция содержимого таблицы */
  bodyRender: () => React.ReactNode;
  /**Заголовок и ширина колонки */
  columnConfig: ITableColumnConfig[];
}

const Table = (props: ITableProps) => {
  return (
    <table>
      <thead>
        <tr>
          {props.columnConfig.map((column) => (
            <td key={column.caption} width={column.width}>
              {column.caption}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>{props.bodyRender()}</tbody>
    </table>
  );
};

export default observer(Table);
