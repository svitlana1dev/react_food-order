import { FC, useContext } from "react";
import { currencyFormatter } from "../../util/formatting";
import {
  Article,
  ArticleBtn,
  ArticleDescription,
  ArticleImg,
  ArticlePrice,
  ArticleTitle,
} from "./styles";
import { Meal } from "../../types/meal";
import { Button } from "../button/Button";
import CartContext from "../../store/CartContext";

type Props = Meal;

export const MealItem: FC<Props> = ({
  id,
  name,
  image,
  price,
  description,
}) => {
  const cartCtx = useContext(CartContext);

  const handleAddToCart = () => {
    cartCtx.addItem({ id, name, image, price, description });
  };

  return (
    <Article>
      <ArticleImg src={`http://localhost:3001/${image}`} alt={name} />
      <div>
        <ArticleTitle>{name}</ArticleTitle>
        <ArticlePrice>{currencyFormatter.format(Number(price))}</ArticlePrice>
        <ArticleDescription>{description}</ArticleDescription>
      </div>

      <div>
        <ArticleBtn>
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </ArticleBtn>
      </div>
    </Article>
  );
};
