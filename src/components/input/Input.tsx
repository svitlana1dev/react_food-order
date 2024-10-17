import { FC } from "react";

type Props = {
  label: string;
  id: string;
  required?: boolean;
  type: string;
  onChange?: () => void;
};

export const Input: FC<Props> = ({ label, id, required, type, onChange }) => {
  return (
    <div className="control">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        required={required}
        type={type}
        onChange={onChange}
      />
    </div>
  );
};
