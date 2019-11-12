import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';



const App = () => {

  const APP_ID  = '59b86a22';
  const APP_KEY = '01bb75cd1763508e37d3be89a8b4d4ce';

  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');


  useEffect(() =>{
    getRecipes();
  }, []);


  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }


  const updateSearch = (e) =>{
    setSearch(e.target.value);
    console.log(search);
  }


// When search-form is submitted, run this function.
  const getSearch = (e) => {
    // Want to stop the page refresh
    e.preventDefault();
    // Setting query to what is in the search-bar
    setQuery(search);
  }


  return (
    <div className='App'>
      {/* Run getSearch when the form is submitted. */}
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
