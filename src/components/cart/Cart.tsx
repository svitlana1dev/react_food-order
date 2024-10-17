import { useContext, useEffect } from "react";
import { Modal } from "../modal/Modal";
import CartContext from "../../store/CartContext";
import { currencyFormatter } from "../../util/formatting";
import { Button } from "../button/Button";
import { UserProgressContext } from "../../store/UseProgressContext";
import { CartItem } from "./CartItem";
import { Meal } from "../../types/meal";

export const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, { price, quantity }) => totalPrice + quantity * price,
    0
  );

  const handleCloseCart = () => {
    userProgressCtx.hideCart();
  };

  const handleGoToCheckout = () => {
    userProgressCtx.showCheckout();
  };

  return (
    <Modal
      open={userProgressCtx.process === "cart"}
      onClose={userProgressCtx.process === "cart" ? handleCloseCart : undefined}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map(
          ({ id, name, image, description, quantity, price }: Meal) => (
            <li key={id}>
              <CartItem
                name={name}
                quantity={quantity!}
                price={price}
                onInc={() =>
                  cartCtx.addItem({
                    id,
                    name,
                    image,
                    description,
                    quantity,
                    price,
                  })
                }
                onDec={() => cartCtx.removeItem(id)}
              />
            </li>
          )
        )}
      </ul>

      <p>{currencyFormatter.format(cartTotal)}</p>
      <div>
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
        )}
      </div>
    </Modal>
  );
};
