import React, { useEffect, useRef, useState } from "react";
import { IPersonItem } from "../../../modals/IPerson";
import ModalService from "../../../services/ModalService";
import PersonRequests from "../../../services/PersonRequests";
import TextButton from "../../Buttons/TextButton";
import Input from "../../Inputs/Input";
import "./CreateModal.css";

const CreateForm = () => {
  const [person, setPerson] = useState<IPersonItem>({
    id: 0,
    fullname: "",
    nickname: "",
    age: "",
    gender: undefined,
  });
  const [isInputDisable, setIsInputDisable] = useState<boolean>(false);
  const nickNameRef = useRef<any>();
  const fullNameNameRef = useRef<any>();
  const AgeRef = useRef<any>();
  const createPerson = () => {
    try {
      PersonRequests.createPerson(person);
      ModalService.closeModal("createModal");
    } catch (error) {
      setIsInputDisable(true);
      alert(error);
    }
  };
  useEffect(() => {
    nickNameRef.current.focus();
    fullNameNameRef.current.focus();
    AgeRef.current.focus();
  }, []);
  return (
    <form
      className="CreateForm"
      onSubmit={(form) => {
        createPerson();
        form.preventDefault();
      }}
    >
      <Input
        disabled={isInputDisable}
        type="text"
        className="CreateForm-input"
        text="Имя"
        placeholder="Введите имя"
        value={person.fullname}
        ref={fullNameNameRef}
        onChange={() => {
          setPerson((prevState) => {
            return { ...prevState, fullname: fullNameNameRef.current.value };
          });
        }}
      />
      <Input
        disabled={isInputDisable}
        type="text"
        className="CreateForm-input"
        text="Никнейм"
        placeholder="Введите никнейм"
        value={person.nickname}
        ref={nickNameRef}
        onChange={() => {
          setPerson((prevState) => {
            return { ...prevState, nickname: nickNameRef.current.value };
          });
        }}
      />
      <Input
        disabled={isInputDisable}
        className="CreateForm-input"
        type="number"
        text="Возраст"
        min={"1"}
        max={"200"}
        placeholder="Введите возраст"
        value={person.age}
        ref={AgeRef}
        onChange={() => {
          setPerson((prevState) => {
            return { ...prevState, age: AgeRef.current.value };
          });
        }}
      />

      <div className="CreateForm__row">
        <Input
          disabled={isInputDisable}
          className="CreateForm__row-radio"
          type="radio"
          text="Мужчина"
          name="gender"
          onChange={() => {
            setPerson((prevState) => {
              return { ...prevState, gender: true };
            });
          }}
        />
        <Input
          disabled={isInputDisable}
          className="CreateForm__row-radio"
          type="radio"
          text="Женщина"
          name="gender"
          onChange={() => {
            setPerson((prevState) => {
              return { ...prevState, gender: false };
            });
          }}
        />
      </div>
      <div className="CreateForm__row-buttons">
        <TextButton title="Добавить" type={"submit"} />
        <TextButton
          title="Закрыть"
          type={"button"}
          onClick={() => {
            ModalService.closeModal("createModal");
          }}
        />
      </div>
    </form>
  );
};

export default CreateForm;
