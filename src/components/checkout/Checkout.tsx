import { useContext, useState } from "react";
import env from "react-dotenv";
import CartContext from "../../store/CartContext";
import { Modal } from "../modal/Modal";
import { currencyFormatter } from "../../util/formatting";
import { Input } from "../input/Input";
import { Button } from "../button/Button";
import { UserProgressContext } from "../../store/UseProgressContext";
import { ControlRow, ModalActions, TotalAmount } from "./styles";

export const Checkout = () => {
  const [ordered, setOrdered] = useState(false);
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (accumulator, { price }) => accumulator + Number(price),
    0
  );

  const handleClose = () => {
    userProgressCtx.hideCheckout();
    setOrdered(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const customerData = Object.fromEntries(formData.entries());

    fetch(`${env.REACT_APP_API_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      }),
    }).then((res) => {
      if (res.ok) {
        setOrdered(true);

        setTimeout(() => {
          userProgressCtx.hideCheckout();
          cartCtx.items.forEach(({ id }) => cartCtx.removeItem(id));
        }, 4000);
      }
    });
  };

  return (
    <Modal open={userProgressCtx.process === "checkout"} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>

        <Input label="Full Name" id="name" type="text" required />
        <Input label="E-Mail Address" id="email" type="email" required />
        <Input label="Street" id="street" type="text" required />
        <ControlRow>
          <Input label="Postal Code" id="postal-code" type="text" required />
          <Input label="City" id="city" type="text" required />
        </ControlRow>

        <TotalAmount>
          Total Amount: {currencyFormatter.format(cartTotal)}
        </TotalAmount>

        <ModalActions>
          <Button type="button" textOnly onClick={handleClose}>
            Close
          </Button>
          <Button type="submit">{ordered ? "✔" : "Submit Order"}</Button>
        </ModalActions>
      </form>
    </Modal>
  );
};
