import { useEffect, useState } from "react";
import { List } from "./styles";

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
    <List>{meals.length > 0 && meals.map(({ name }) => <li>{name}</li>)}</List>
  );
};
