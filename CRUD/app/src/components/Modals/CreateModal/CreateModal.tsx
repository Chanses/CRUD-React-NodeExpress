import React from "react";
import { IModal } from "../../../modals/IModal";
import ModalService from "../../../services/ModalService";
import Modal from "../Modal";
import CreateForm from "./CreateForm";

export interface ICreateModal extends IModal {}
const CreateModal = (props: ICreateModal) => {
  return (
    <Modal {...props} {...ModalService.modals[props.modalName!]}>
      <CreateForm />
    </Modal>
  );
};

export default CreateModal;
