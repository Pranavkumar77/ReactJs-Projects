import React from 'react'
import RecipeItem from './RecipeItem';
const Recipes = (props) => {
  const {recipes} = props;
  return(
  <div className="row">
    {recipes.map(recipe => (
    <RecipeItem 
    key={Date.now()}
    name= {recipe.recipe.label}
    image= {recipe.recipe.image}
    ingredientLines = {recipe.recipe.ingredientLines} 
    />
  ))}
  </div>
  );
};
export default Recipes;