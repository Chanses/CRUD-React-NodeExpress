import React from "react";

export interface IInput {
  value?: any;
  text?: string;
  placeholder?: string;
  max?: string;
  min?: string;
  className?: string;
  onChange: () => void;
  type: string;
  name?: string;
  disabled?: boolean;
  checked?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, IInput>(
  (props: IInput, ref) => {
    return (
      <label className={props.className}>
        {props.text}
        <input
          type={props.type}
          required
          name={props.name}
          ref={ref}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          max={props.max}
          min={props.min}
          {...(props.disabled
            ? {
                disabled: true,
                style: {
                  background: "none",
                  border: "none",
                  textAlign: "center",
                },
              }
            : { disabled: false })}
          checked={props.checked}
        />
      </label>
    );
  }
);

export default Input;
