import { observer } from "mobx-react-lite";
import React from "react";
import { IPersonItem } from "../../../modals/IPerson";
import editImg from "../../../images/editImg.png";
import deleteImg from "../../../images/deleteImg.png";
import acceptImg from "../../../images/acceptImg.png";
import cancelImg from "../../../images/cancelImg.png";
import "./Person.css";
import PersonRow from "./PersonRow";
import ModalService from "../../../services/ModalService";
import PersonRequests from "../../../services/PersonRequests";

interface IPerson {
  person: IPersonItem;
}

const PersonRowContainer = (props: IPerson) => {
  const showDeleteModal = () => {
    ModalService.showModal("confirmModal", {
      modalName: "confirmModal",
      title: "Удаление пользователя",
      onSubmitClick: () => {
        try {
          PersonRequests.deletePerson(props.person.id);
          ModalService.closeModal("confirmModal");
        } catch (error) {
          alert(error);
        }
      },
    });
  };

  return (
    <>
      <PersonRow
        {...props}
        showDeleteModal={showDeleteModal}
        submitEditImg={acceptImg}
        cancelEditImg={cancelImg}
        editImg={editImg}
        deleteImg={deleteImg}
        person={props.person}
      />
    </>
  );
};

export default observer(PersonRowContainer);
