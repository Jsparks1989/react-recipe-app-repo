import React from 'react';
// Passing the variables from <Recipe />, in App, to the Recipe component.
const Recipe = ({title, calories, image, ingredients}) => {
    // console.log(ingredients.ingredient.text);
    // Use map(var =>()), not map(var =>{}) when using map when outputting html. 
    // Only use {} when outputting JS.
    return(
        <div>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <h3>Calories</h3>
            <p>{calories}</p>
            <img src={image} alt=""/>
        </div>
    );
}

export default Recipe;
