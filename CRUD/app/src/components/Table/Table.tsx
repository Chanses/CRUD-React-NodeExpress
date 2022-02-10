import { observer } from "mobx-react-lite";
import React from "react";
import "./Table.css";

interface IHeader {
  caption: string;
  width?: string;
}
interface ITableProps {
  /**Рендер-функция содержимого таблицы */
  bodyRender: () => React.ReactNode;
  /**Заголовок и ширина колонки */
  headerCaptions: IHeader[];
}

const Table = (props: ITableProps) => {
  return (
    <table>
      <thead>
        <tr>
          {props.headerCaptions.map((column) => (
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
