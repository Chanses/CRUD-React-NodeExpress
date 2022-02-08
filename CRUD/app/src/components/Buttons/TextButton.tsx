interface ITextButtonProps {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "reset" | "submit" | undefined;
  className?: string;
}

const TextButton = ({ title = "Сохранить", ...props }: ITextButtonProps) => {
  return (
    <button
      type={props.type}
      className={props.className + " button"}
      onClick={props.onClick}
      {...(props.disabled
        ? {
            disabled: true,
          }
        : { disabled: false })}
    >
      {title}
    </button>
  );
};

export default TextButton;
