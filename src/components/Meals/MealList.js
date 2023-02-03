import { useState, useEffect } from "react";
import Card from "../UI/Card";
import styles from "./MealList.module.css";
import MealItem from "./MealItem/MealItem";

function MealList() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://react-course-http-47864-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong...");
      }

      const data = await response.json();

      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((err) => {
      setIsLoading(false);
      setErrorMessage(err.message);
    });
  }, []);

  const mealList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        {!isLoading && mealList.length > 0 && <ul>{mealList}</ul>}
        {isLoading && <p className={styles.loading}>Loading meals...</p>}
        {!isLoading && mealList === 0 && (
          <p className={styles.error}>Meals not found</p>
        )}
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      </Card>
    </section>
  );
}

export default MealList;
