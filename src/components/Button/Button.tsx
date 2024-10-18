import { FC, ReactNode } from "react";
import { Btn } from "./styles";

type Props = {
  children: ReactNode;
  textOnly?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export const Button: FC<Props> = ({
  children,
  textOnly = false,
  type,
  onClick,
}) => {
  return (
    <Btn type={type} onClick={onClick} $textOnly={textOnly}>
      {children}
    </Btn>
  );
};
