import { FC } from "react";
import { Control, ControlInput } from "./style";

type Props = {
  label: string;
  id: string;
  required?: boolean;
  type: string;
  onChange?: () => void;
};

export const Input: FC<Props> = ({ label, id, required, type, onChange }) => {
  return (
    <Control>
      <label htmlFor={id}>{label}</label>
      <ControlInput
        id={id}
        name={id}
        required={required}
        type={type}
        onChange={onChange}
      />
    </Control>
  );
};
