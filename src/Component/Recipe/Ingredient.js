import { getRecipe } from "../../Models/Recipets";
import { useParams, useHistory } from "react-router-dom";

function Ingredient (){

  const { id } = useParams();
  
  const recipe = getRecipe(id);

  const ingredientRendered = recipe.ingridients.map((ingridient) =>{
    const name = ingridient.name;
    const nameRendered = name.charAt(0).toUpperCase() + name.slice(1);

    return (
      <div className='ingredient__items'>
        <p className='ingredient__text_name' >{nameRendered}</p>
        <p className='ingredient__text_count'>{ingridient.count}</p>
        <p className='ingredient__text_measure'>{ingridient.measure}</p>
      </div>
    )
  });


    return(
    <div className='ingredient col-10 col-md-10 offset-md-1'>
      <h3 className='ingredient__subtitle'>ИНГРЕДИЕНТЫ</h3>
      {ingredientRendered}
    </div>
    )
}

export default Ingredient;