import React from "react";
import ImgButton from "../../Buttons/ImgButton";
import "./ActionCell.css";

interface ActionCellProps {
  onSubmitClick?: (data: any) => void;
  onCancelClick: (data?: any) => void;
  acceptButtonImg: string;
  cancelButtonImg: string;
  className?: string;
  submitButtonType?: "button" | "reset" | "submit" | undefined;
  cancelButtonType?: "button" | "reset" | "submit" | undefined;
}

const ActionCell = (props: ActionCellProps) => {
  return (
    <div className={props.className}>
      <ImgButton
        img={props.acceptButtonImg}
        onClick={props.onSubmitClick}
        type={props.submitButtonType}
      />
      <ImgButton
        img={props.cancelButtonImg}
        onClick={props.onCancelClick}
        type={props.cancelButtonType}
      />
    </div>
  );
};

export default ActionCell;
