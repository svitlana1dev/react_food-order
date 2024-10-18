import { useContext } from "react";
import { Modal } from "../modal/Modal";
import CartContext from "../../store/CartContext";
import { currencyFormatter } from "../../util/formatting";
import { Button } from "../button/Button";
import { UserProgressContext } from "../../store/UseProgressContext";
import { CartItem } from "./CartItem";
import { Meal } from "../../types/meal";
import { CartActions, CartItemWrapp, CartList, CartTotalPrice } from "./styles";

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
      <CartList>
        {cartCtx.items.map(
          ({ id, name, image, description, quantity, price }: Meal) => (
            <CartItemWrapp key={id}>
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
            </CartItemWrapp>
          )
        )}
      </CartList>

      <CartTotalPrice>{currencyFormatter.format(cartTotal)}</CartTotalPrice>
      <CartActions>
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
        )}
      </CartActions>
    </Modal>
  );
};
