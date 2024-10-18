import env from "react-dotenv";
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
  } = useHttp(`${env.REACT_APP_API_URL}/meals`, requestConfig, []);

  return (
    <>
      {isLoading && <p>Fetching meals...</p>}

      {!isLoading && !LoadedMeals && <p>No meals found.</p>}

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
    </>
  );
};
