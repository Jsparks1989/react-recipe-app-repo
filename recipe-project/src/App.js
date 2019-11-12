import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {

  const [counter, setCounter] = useState(0);

  // function that is ran everytime the page is rendered.
  useEffect(() =>{
    console.log('effect has been run');
  }, [counter]);


  return (
    <div className='App'>
      <form className="search-form">
        <input className="search-bar" type='text'/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <h1 onClick={() =>setCounter(counter + 1)}>{counter}</h1>
    </div>
  );
}

export default App;
