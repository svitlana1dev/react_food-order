import styled from "styled-components";

export const CartList = styled.ul`
  border-bottom: 1px solid #ededed;
`;

export const CartItemWrapp = styled.li`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 20px;
  font-size: 24px;
`;

export const CartItemActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CartItemBtn = styled.button`
  border: none;
  border-radius: 5px;
  padding: 5px;
  width: 20px;
`;

export const CartTotalPrice = styled.p`
  font-size: 20px;
  text-align: right;
`;

export const CartActions = styled.div`
  display: flex;
  justify-content: end;
  gap: 20px;
`;
