import { observer } from "mobx-react-lite";
import React, { useEffect, useRef, useState } from "react";
import { IPersonItem } from "../../../modals/IPerson";
import PersonStore from "../../../stores/PersonStore";
import Input from "../../Inputs/Input";
import InputRadio from "../../Inputs/InputRadio";
import ActionCell from "../ActionCell/ActionCell";

interface IPersonTableLine {
  person: IPersonItem;
  showDeleteModal: () => void;
  submitEditImg: string;
  cancelEditImg: string;
  editImg: string;
  deleteImg: string;
}

const PersonTableLine = (props: IPersonTableLine) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isInputDisable, setIsInputDisable] = useState<boolean>(true);
  const ageInputRef = useRef<any>();
  const fullNameRef = useRef<any>();
  const nickNameRef = useRef<HTMLInputElement>(null);
  const [person, setPerson] = useState<IPersonItem>({
    id: 0,
    fullname: "",
    nickname: "",
    age: 0,
    gender: true,
  });

  const toggleEdit = () => {
    setIsEdit(!isEdit);
    setIsInputDisable(!isInputDisable);
  };

  const editPerson = () => {
    try {
      PersonStore.editPerson(person);
      toggleEdit();
    } catch (error) {
      setPerson(props.person);
      toggleEdit();
      alert(error);
    }
  };

  const closeEdit = () => {
    setPerson(props.person);
    toggleEdit();
  };

  useEffect(() => {
    setPerson(props.person);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <tr className="TableRow">
      <td className="TableRow__column">
        <Input
          disabled={isInputDisable}
          type="text"
          value={person?.fullname}
          ref={fullNameRef}
          onChange={() => {
            setPerson((prevState) => {
              return { ...prevState, fullname: fullNameRef.current.value };
            });
          }}
        />
      </td>
      <td className="TableRow__column">
        <Input
          disabled={isInputDisable}
          type="text"
          value={person?.nickname}
          ref={nickNameRef}
          onChange={() => {
            setPerson((prevState) => {
              return {
                ...prevState,
                nickname: nickNameRef.current?.value || "",
              };
            });
          }}
        />
      </td>
      <td className="TableRow__column">
        <Input
          disabled={isInputDisable}
          type="number"
          value={person?.age}
          ref={ageInputRef}
          max="200"
          min={"1"}
          onChange={() => {
            setPerson((prevState) => {
              return { ...prevState, age: ageInputRef.current.value };
            });
          }}
        />
      </td>
      <td className="TableRow__column-radio">
        <InputRadio
          className="TableRow__column-radio"
          disabled={isInputDisable}
          name={`gender${person.id}`}
          text="Мужчина"
          checked={person.gender}
          onChange={() =>
            setPerson((prevState) => {
              return { ...prevState, gender: true };
            })
          }
        />
        <InputRadio
          disabled={isInputDisable}
          name={`gender${person.id}`}
          text="Женщина"
          checked={!person.gender ? true : false}
          onChange={() =>
            setPerson((prevState) => {
              return { ...prevState, gender: false };
            })
          }
        />
      </td>
      <td>
        {!isEdit ? (
          <ActionCell
            submitButtonType={"button"}
            cancelButtonType={"button"}
            className="TableRow__column"
            onSubmitClick={toggleEdit}
            onCancelClick={props.showDeleteModal}
            acceptButtonImg={props.editImg}
            cancelButtonImg={props.deleteImg}
          />
        ) : (
          <ActionCell
            submitButtonType={"button"}
            cancelButtonType={"button"}
            className="TableRow__column"
            onSubmitClick={editPerson}
            onCancelClick={closeEdit}
            acceptButtonImg={props.submitEditImg}
            cancelButtonImg={props.cancelEditImg}
          />
        )}
      </td>
    </tr>
  );
};

export default observer(PersonTableLine);
