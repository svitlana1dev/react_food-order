import { useContext, useState } from "react";
import CartContext from "../../store/CartContext";
import { Modal } from "../modal/Modal";
import { currencyFormatter } from "../../util/formatting";
import { Input } from "../input/Input";
import { Button } from "../button/Button";
import { UserProgressContext } from "../../store/UseProgressContext";

export const Checkout = () => {
  const [ordered, setOrdered] = useState(false);
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.length;

  const handleClose = () => {
    userProgressCtx.hideCheckout();
    setOrdered(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const customerData = Object.fromEntries(formData.entries());

    fetch("http://localhost:3001/orders", {
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
        cartCtx.items.forEach(({ id }) => cartCtx.removeItem(id));
      }
    });
  };

  return (
    <Modal open={userProgressCtx.process === "checkout"} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

        <Input label="Full Name" id="name" type="text" />
        <Input label="E-Mail Address" id="email" type="email" required />
        <Input label="Street" id="street" type="text" />
        <div className="control-row">
          <Input label="Postal Code" id="postal-code" type="text" />
          <Input label="City" id="city" type="text" />
        </div>

        <div className="modal-actions" style={{ display: "flex" }}>
          <Button type="button" textOnly onClick={handleClose}>
            Close
          </Button>
          {ordered ? (
            <p>Order successful</p>
          ) : (
            <Button type="submit">Submit Order</Button>
          )}
        </div>
      </form>
    </Modal>
  );
};
