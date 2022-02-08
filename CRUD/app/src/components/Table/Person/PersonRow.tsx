import { observer } from "mobx-react-lite";
import React, { useEffect, useRef, useState } from "react";
import { IPersonItem } from "../../../modals/IPerson";
import PersonRequests from "../../../services/PersonRequests";
import Input from "../../Inputs/Input";
import InputRadio from "../../Inputs/InputRadio";
import ActionCell from "../ActionCell/ActionCell";

interface IPersonRow {
  person: IPersonItem;
  showDeleteModal: () => void;
  submitEditImg: string;
  cancelEditImg: string;
  editImg: string;
  deleteImg: string;
}

const PersonRow = (props: IPersonRow) => {
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
      PersonRequests.editPerson(person);
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
    <form className="TableRow">
      <div className="TableRow__column">
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
      </div>
      <div className="TableRow__column">
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
      </div>
      <div className="TableRow__column">
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
      </div>
      <div className="TableRow__column-radio">
        <InputRadio
          disabled={isInputDisable}
          name="gender"
          text="Мужчина"
          checked={person.gender ? true : false}
          onChange={() =>
            setPerson((prevState) => {
              return { ...prevState, gender: true };
            })
          }
        />
        <InputRadio
          disabled={isInputDisable}
          name="gender"
          text="Женщина"
          checked={!person.gender ? true : false}
          onChange={() =>
            setPerson((prevState) => {
              return { ...prevState, gender: false };
            })
          }
        />
      </div>
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
    </form>
  );
};

export default observer(PersonRow);
