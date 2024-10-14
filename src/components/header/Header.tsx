import { Logo, LogoWrapp, MainHeader, NavLogo, Title } from "./styles";
import logo from "../../assets/logo.jpg";

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
        <button>Cart (0)</button>
      </nav>
    </MainHeader>
  );
};
