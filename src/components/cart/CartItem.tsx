import { FC } from "react";
import { currencyFormatter } from "../../util/formatting";
import { CartItemActions, CartItemBtn } from "./styles";

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

      <CartItemActions>
        <CartItemBtn onClick={onDec}>-</CartItemBtn>
        <span>{quantity}</span>
        <CartItemBtn onClick={onInc}>+</CartItemBtn>
      </CartItemActions>
    </>
  );
};
