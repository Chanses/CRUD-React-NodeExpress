import { observer } from "mobx-react-lite";
import React from "react";
import ModalService from "../../services/ModalService";
import TextButton from "../Buttons/TextButton";
import CreateModal from "../Modals/CreateModal/CreateModal";

import "./Header.css";

const Header = () => {
  const onCreate = () => {
    ModalService.showModal("createModal", {
      title: "Создание пользователя",
      modalName: "createModal",
    });
  };
  return (
    <>
      <div className="Header">
        <div className="Header__title">CRUD Table</div>
        <TextButton title="Добавить" onClick={onCreate} />
      </div>
      <CreateModal {...ModalService.modals.createModal!} />
    </>
  );
};

export default observer(Header);
