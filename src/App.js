import './App.css';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Menu from './pages/Menu';
// import Meal from "./pages/Meal";
import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import MealSearch from './pages/MealSearch';

export default function App() {
  let [menu, setMenu] = useState({});

  async function getMenu(meal) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;
    try {
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
      setMenu(data);
    } catch (error) {
      console.log(error);
    } //return console.log(data)
  }

  useEffect(() => {
    getMenu('pie');
  }, []);
  // getMenu();

  return (
    <>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<MealSearch getMenu={menu} />} />
          <Route path="/menu" element={<Menu menudata={menu} />} />
          {/* <Route  path="/menu/:menu.strMeal" element ={<Meal />}/> */}
          <Route path="*" element={<>This Page could not be found </>} />
        </Routes>

        {/* {getMenu} */}
      </div>
    </>
  );
}
