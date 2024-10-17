import { Logo, LogoWrapp, MainHeader, NavLogo, Title } from "./styles";
import logo from "../../assets/logo.jpg";
import { Button } from "../button/Button";
import { useContext } from "react";
import CartContext from "../../store/CartContext";
import { UserProgressContext } from "../../store/UseProgressContext";

export const Header = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalItems = cartCtx.items.length;

  const handleShowCart = () => {
    userProgressCtx.showCart();
  };

  return (
    <MainHeader>
      <NavLogo>
        <LogoWrapp>
          <Logo src={logo} alt="food-logo" />
        </LogoWrapp>

        <Title>Food</Title>
      </NavLogo>

      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalItems})
        </Button>
      </nav>
    </MainHeader>
  );
};
