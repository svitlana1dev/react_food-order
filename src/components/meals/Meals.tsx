import { useEffect, useState } from "react";
import { List, ListItem } from "./styles";
import { MealItem } from "./MealItem";

export const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3001/meals");

      if (!res.ok) {
        return;
      }
      const meals = await res.json();
      setMeals(meals);
    })();
  }, []);

  return (
    <List>
      {meals.length > 0 &&
        meals.map(({ id, name, image, price, description }) => (
          <ListItem key={id}>
            <MealItem
              id={id}
              name={name}
              img={image}
              price={price}
              description={description}
            />
          </ListItem>
        ))}
    </List>
  );
};
