import React from "react";

interface IImgButton {
  onClick?: React.MouseEventHandler;
  className?: string;
  img: string;
  type?: "button" | "reset" | "submit" | undefined;
}

const ImgButton = (props: IImgButton) => {
  return (
    <button
      className={props.className}
      onClick={props.onClick}
      type={props.type}
    >
      <img src={props.img} alt="" />
    </button>
  );
};

export default ImgButton;
