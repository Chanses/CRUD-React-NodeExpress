import React from "react";
import { IModal } from "../../../modals/IModal";
import ModalService from "../../../services/ModalService";
import Modal from "../Modal";
import ConfirmForm from "./ConfirmForm";
import "./ConfirmModal.css";

export interface IConfirmModal extends IModal {
  onSubmitClick: () => void;
}

const ConfirmModal = (props: IConfirmModal) => {
  return (
    <Modal {...props} {...ModalService.modals[props.modalName!]}>
      <ConfirmForm
        onSubmitClick={props.onSubmitClick}
        onCancelClick={() => ModalService.closeModal("confirmModal")}
        text={`Вы уверены что хотите удалить данного пользователя?`}
      />
    </Modal>
  );
};

export default ConfirmModal;
