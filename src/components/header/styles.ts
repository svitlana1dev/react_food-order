import styled from "styled-components";

export const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 10%;
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
