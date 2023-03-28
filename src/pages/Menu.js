// import { Link } from 'react-router-dom';
import MealCard from '../components/MealCard';
import Form from '../components/Form';

function Menu({ menudata }) {
  const menu = menudata.meals;
  console.log(menu);

  return (
    <>
      <div className="menu">
        {/* Menu Page (PIES) */}
        {menu.map((meal) => (
          //   <Link key={meal.strMeal} to={`/price/${meal.strMeal}`}>
          <MealCard name={meal} />
          // <p className="name">{meal.strMeal}</p>
          //   {/* </Link>  */}
        ))}
        <Form />
      </div>
    </>
  );
}

export default Menu;
