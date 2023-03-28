export default function FormDisplay({ meal }) {
  return (
    <div>
      <h1>Meal: {meal.strMeal}</h1>
      <h2>Cuisine: {meal.strArea}</h2>
      <img src={meal.trMealThumb} alt={meal.strMeal} />
      <h2>Ingredients: {meal.strIngredient}</h2>
      <h2>Instructions: </h2>
      <h2>{meal.strInstructions}</h2>
    </div>
  );
}
