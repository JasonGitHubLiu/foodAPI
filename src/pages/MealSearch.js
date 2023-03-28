// import Form from "../components/Form"
// import { useState, useEffect } from "react";

// export default function MealSearch() {

//   let [input, setInput] = useState("");

//   function handleChange(e) {
//     setInput(e.target.value);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     // getMovie(input);
//   }
//   async function getMenu(meal) {
//     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;
//     try {
//         let res = await fetch(url)
//         let data = await res.json()
//         console.log(data)
//         setMenu(data);
//     } catch(error) {
//         console.log(error)
//     } //return console.log(data)
//   }

//   useEffect(() => {
//     getMenu('pie');
//   }, []);

//     return (
//         <>
//         <h1>Please enter the name of a meal</h1>
//         <h2>Coming Soon...</h2>
//           <Form />
//         {/* <form onSubmit={handleSubmit}>
//         <input value={input} onChange={handleChange} />
//         <button>Search</button>
//         </form> */}
//         </>
//     )
// }
