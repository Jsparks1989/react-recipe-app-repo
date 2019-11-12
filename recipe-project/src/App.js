import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {




  const [recipes, setRecipes] = useState([]);

  useEffect(() =>{
    getRecipes();
  }, []);


  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    // Now all chicken recipes are in the recipes state.
    setRecipes(data.hits);
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
