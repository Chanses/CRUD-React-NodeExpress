import React from "react";
import TextButton from "../../Buttons/TextButton";

interface IConfirmForm {
  onSubmitClick: () => void;
  onCancelClick: () => void;
  text: string;
}

const ConfirmForm = (props: IConfirmForm) => {
  return (
    <div>
      <div className="Modal__Text">{props.text}</div>
      <div className="Modal__Buttons">
        <TextButton title="Да" onClick={props.onSubmitClick} />
        <TextButton title="Нет" onClick={props.onCancelClick} />
      </div>
    </div>
  );
};

export default ConfirmForm;
