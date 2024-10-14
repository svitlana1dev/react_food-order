import styled from "styled-components";

export const List = styled.ul`
  padding: 0;
  list-style: none;
  margin: 2rem auto;
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 16px;
`;
