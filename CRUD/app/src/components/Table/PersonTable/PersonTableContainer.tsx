import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import ModalService from "../../../services/ModalService";
import PersonRequests from "../../../services/PersonRequests";
import PersonStore from "../../../stores/PersonStore";
import Table from "../Table";
import PersonTableLine from "./PersonTableLine";
import editImg from "../../../images/editImg.png";
import deleteImg from "../../../images/deleteImg.png";
import acceptImg from "../../../images/acceptImg.png";
import cancelImg from "../../../images/cancelImg.png";
import ConfirmModal from "../../Modals/ConfirmModal/ConfirmModal";

const PersonTableContainer = () => {
  useEffect(() => {
    try {
      PersonRequests.getPersonsAll();
    } catch (error) {
      alert(error);
    }
  }, []);

  const showDeleteModal = (id: number) => {
    ModalService.showModal("confirmModal", {
      modalName: "confirmModal",
      title: "Удаление пользователя",
      onSubmitClick: () => {
        try {
          PersonRequests.deletePerson(id);
          ModalService.closeModal("confirmModal");
        } catch (error) {
          alert(error);
        }
      },
    });
  };

  const renderPersons = () => {
    return PersonStore.personList.map((person) => (
      <PersonTableLine
        key={person.id}
        person={person}
        showDeleteModal={() => showDeleteModal(person.id)}
        submitEditImg={acceptImg}
        cancelEditImg={cancelImg}
        editImg={editImg}
        deleteImg={deleteImg}
      />
    ));
  };
  const personTableColumnValues = [
    { caption: "Имя", width: "25%" },
    { caption: "Никнейм", width: "25%" },
    { caption: "Возраст", width: "15%" },
    { caption: "Пол", width: "25%" },
    { caption: "Действия", width: "10%" },
  ];

  return (
    <>
      <Table
        bodyRender={renderPersons}
        columnConfig={personTableColumnValues}
      />
      <ConfirmModal {...ModalService.modals.confirmModal!} />
    </>
  );
};

export default observer(PersonTableContainer);
