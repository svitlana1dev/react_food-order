import styled from "styled-components";

export const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10%;
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const LogoWrapp = styled.div`
  max-width: 50px;
  border-radius: 50%;
  border: 1px solid #44c3c3;
  overflow: hidden;
`;

export const Logo = styled.img`
  width: 100%;
  display: flex;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  color: #44c3c3;
`;

export const CartBtn = styled.div`
  position: relative;
`;

export const CartIcon = styled.img`
  max-width: 30px;
`;

export const CartTotal = styled.span`
  padding: 5px;
  background: #44c3c3;
  color: #fff;
  border-radius: 50%;
  position: absolute;
  top: -15px;
  right: -20px;
  width: 20px;
`;
