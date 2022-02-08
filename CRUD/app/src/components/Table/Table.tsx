import { observer } from "mobx-react-lite";
import React, { useLayoutEffect } from "react";
import { IPersonItem } from "../../modals/IPerson";
import ModalService from "../../services/ModalService";
import PersonRequests from "../../services/PersonRequests";
import ConfirmModal from "../Modals/ConfirmModal/ConfirmModal";
import PersonRowContainer from "./Person/PersonRowContainer";
import "./Table.css";
import TableHeader from "./TableHeader";

interface ITable {
  personList: IPersonItem[];
}

const Table = (props: ITable) => {
  useLayoutEffect(() => {
    try {
      PersonRequests.getPersonsAll();
    } catch (error) {
      alert(error);
    }
  }, []);
  return (
    <>
      <div className="Table">
        <TableHeader />
        {props.personList.map((person) => (
          <PersonRowContainer person={person} key={person.id} />
        ))}
      </div>
      <ConfirmModal {...ModalService.modals.confirmModal!} />
    </>
  );
};

export default observer(Table);
