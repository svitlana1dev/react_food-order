import styled from "styled-components";

type Props = {
  $textOnly: boolean;
};

export const Btn = styled.button<Props>`
  border: none;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;

  ${(props) =>
    props.$textOnly
      ? `
    background: transparent;
   `
      : `
   background: #44c3c3;
   color: #fff;
   padding: 15px 20px;
   border-radius: 5px;
   `};
`;
