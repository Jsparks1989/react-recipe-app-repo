import React from 'react';
// Passing the variables from <Recipe />, in App, to the Recipe component.
const Recipe = ({title, calories, image}) => {
    return(
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image} alt=""/>
        </div>
    );
}

export default Recipe;