import React from "react";
import { IModal } from "../../../modals/IModal";
import ModalService from "../../../services/ModalService";
import TextButton from "../../Buttons/TextButton";
import Modal from "../Modal";
import "./ConfirmModal.css";

export interface IConfirmModal extends IModal {
  onSubmitClick: () => void;
}

const ConfirmModal = (props: IConfirmModal) => {
  const ConfirmFormChildren = (props: IConfirmModal) => {
    return (
      <div>
        <div className="Modal__Text">
          Вы уверены что хотите удалить данного пользователя?
        </div>
        <div className="Modal__Buttons">
          <TextButton title="Да" onClick={props.onSubmitClick} />
          <TextButton
            title="Нет"
            onClick={() => ModalService.closeModal("confirmModal")}
          />
        </div>
      </div>
    );
  };
  return (
    <Modal {...props} {...ModalService.modals[props.modalName!]}>
      <ConfirmFormChildren {...props} />
    </Modal>
  );
};

export default ConfirmModal;
