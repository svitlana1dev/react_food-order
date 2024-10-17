import { MealItem } from "./MealItem";
import { useHttp } from "../../hooks/useHttp";
import { List, ListItem } from "./styles";
import { Meal } from "../../types/meal";

const requestConfig = { method: "GET" };

export const Meals = () => {
  const {
    data: LoadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3001/meals", requestConfig, []);

  if (isLoading) {
    return <p>Fetching meals...</p>;
  }

  if (!LoadedMeals) {
    return <p>No meals found.</p>;
  }

  return (
    <List>
      {LoadedMeals.length > 0 &&
        LoadedMeals.map(({ id, name, image, price, description }: Meal) => (
          <ListItem key={id}>
            <MealItem
              id={id}
              name={name}
              image={image}
              price={price}
              description={description}
            />
          </ListItem>
        ))}
    </List>
  );
};
