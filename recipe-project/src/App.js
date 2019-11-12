import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {

  const APP_ID  = '59b86a22';
  const APP_KEY = '01bb75cd1763508e37d3be89a8b4d4ce';

  // The state
  const [recipes, setRecipes] = useState([]);

  // useEffect() runs when the page is re-rendered. The second param (the empty array), will make useEffect() only run once.
  // getRecipes() will be ran when useEffect() is ran.
  useEffect(() =>{
    getRecipes();
  }, []);


  // getRecipes is the function used to make a connection to the edamam API. Using 'await' bc you dont know when the data
  // will be returned. Setting the data returned to JSON format so its easier to read.
  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data.hits);
  }


  return (
    <div className='App'>
      <form className="search-form">
        <input className="search-bar" type='text'/>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
