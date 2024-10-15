import { Logo, LogoWrapp, MainHeader, NavLogo, Title } from "./styles";
import logo from "../../assets/logo.jpg";
import { Button } from "../Button/Button";

export const Header = () => {
  return (
    <MainHeader>
      <NavLogo>
        <LogoWrapp>
          <Logo src={logo} alt="food-logo" />
        </LogoWrapp>

        <Title>Food</Title>
      </NavLogo>

      <nav>
        <Button textOnly>Cart (0)</Button>
      </nav>
    </MainHeader>
  );
};
