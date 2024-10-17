import { FC } from "react";
import { currencyFormatter } from "../../util/formatting";

type Props = {
  name: string;
  quantity: number;
  price: string;
  onInc: () => void;
  onDec: () => void;
};

export const CartItem: FC<Props> = ({
  name,
  quantity,
  price,
  onInc,
  onDec,
}) => {
  return (
    <>
      <p>
        {name} - {quantity} x {currencyFormatter.format(Number(price))}
      </p>

      <p>
        <button onClick={onDec}>-</button>
        <span>{quantity}</span>
        <button onClick={onInc}>+</button>
      </p>
    </>
  );
};
