import React from "react";
import { IInput } from "./Input";

interface IInputRadio
  extends Omit<IInput, "placeholder" | "max" | "min" | "type"> {}

const InputRadio = React.forwardRef<HTMLInputElement, IInputRadio>(
  (props: IInputRadio, ref) => {
    return (
      <label
        className={props.className}
        {...(!props.checked && props.disabled
          ? { style: { display: "none" } }
          : undefined)}
      >
        {props.text}
        <input
          required
          type={"radio"}
          name={props.name}
          ref={ref}
          value={props.value}
          onChange={props.onChange}
          {...(props.disabled
            ? {
                disabled: true,
                style: {
                  background: "none",
                  border: "none",
                  textAlign: "center",
                  display: "none",
                },
              }
            : { disabled: false })}
          checked={props.checked}
        />
      </label>
    );
  }
);

export default InputRadio;
