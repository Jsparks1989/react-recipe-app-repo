import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';



const App = () => {
  //-- Edamam API data
  const APP_ID  = '59b86a22';
  const APP_KEY = '01bb75cd1763508e37d3be89a8b4d4ce';


  //-- State -> "[state variable, function for setting the state variable] = useState(default value of the state variable)"
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');


  //-- Everytime the page is re-rendered, the API call is made again.
  useEffect(() =>{
    getRecipes();
  }, []);


  //-- Making the API call for Edamam recipes and setting the fetched data from the call to json format.
  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  // Setting what the user typed in the search-bar (e.target.value) to the state.search. 
  const updateSearch = (e) =>{
    setSearch(e.target.value);
    console.log(search);
  }


// When search-form is submitted, run this function. Has an event passed in as a parameter.
  const getSearch = (e) => {
    // This will stop the browser re-loading when form is submitted.
    e.preventDefault();
    // Setting query to what is in the search-bar
    setQuery(search);
  }


  return (
    <div className='App'>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type='text' value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
}

export default App;
