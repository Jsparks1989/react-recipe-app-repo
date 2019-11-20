import React from 'react';
import style from './recipe.module.css';


// Passing the variables from <Recipe />, in App, to the Recipe component.
const Recipe = ({title, calories, image, ingredients}) => {
    // console.log(ingredients.ingredient.text);
    // Use map(var =>()), not map(var =>{}) when using map when outputting html. 
    // Only use {} when outputting JS.
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <h3>Calories</h3>
            <p>{calories}</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    );
}

export default Recipe;



/**
 * 
 * Adding the modal window to this component possibly? 
 * This is where I will start. 
 * 
 * 
 * 
 * 
 * /