import React from "react";
import ReactDOM from "react-dom";
import { IModal } from "../../modals/IModal";
import ModalService from "../../services/ModalService";
import { observer } from "mobx-react-lite";
import "./Modal.css";

const Modal = (props: IModal) => {
  const modalRoot = document.getElementById("modal-root")!;

  const getModalPortal = () => {
    return ReactDOM.createPortal(
      <div className="Modal-Wrapper">
        <div className="Modal">
          <div className="Modal__Article">{props.title}</div>
          <div className="Modal__Content">{props.children}</div>
        </div>
      </div>,
      modalRoot
    );
  };

  const getModal = () => {
    if (props.modalName! in ModalService.modals) return getModalPortal();
    else return null;
  };
  return getModal();
};

export default observer(Modal);
