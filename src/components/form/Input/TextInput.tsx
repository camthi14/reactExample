import { ChangeEvent, ComponentProps } from "react";
import "./TextInput.css";

type TextInputProps = {
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  type: string;
  label: string;
} & ComponentProps<"input">;

const TextInput = ({
  onChangeInput,
  value,
  name,
  type,
  label,
  ...props
}: TextInputProps) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        onChange={onChangeInput}
        value={value}
        type={type}
        name={name}
        id={name}
        {...props}
      />
    </div>
  );
};

export default TextInput;
