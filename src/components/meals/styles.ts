import styled from "styled-components";

export const List = styled.ul`
  padding: 0;
  list-style: none;
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 16px;
`;

export const ListItem = styled.li`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
`;

export const Article = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ArticleImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const ArticleTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin: 12px 0;
`;

export const ArticleDescription = styled.p`
  margin: 16px;
`;

export const ArticlePrice = styled.p`
  display: inline-block;
  background: #000;
  opacity: 0.6;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  padding: 8px 32px;
  margin: 0;
  border-radius: 5px;
`;

export const ArticleBtn = styled.div`
  margin: 16px;
`;
