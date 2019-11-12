import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {

  const APP_ID  = '59b86a22';
  const APP_KEY = '01bb75cd1763508e37d3be89a8b4d4ce';


  const [recipes, setRecipes] = useState([]);

  useEffect(() =>{
    getRecipes();
  }, []);


  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }


  return (
    <div className='App'>
      <form className="search-form">
        <input className="search-bar" type='text'/>
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe => (
        // Need to add unique key prop to each recipe. Will help render faster. Setting key to recipe title for now.
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
