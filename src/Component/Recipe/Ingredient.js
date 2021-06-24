import { getRecipe } from "../../Models/Recipets";
import { useParams } from "react-router-dom";

function Ingredient() {
  const { id } = useParams();
  const recipe = getRecipe(id);
  let total = [];
  let totalСalories = 0;

  const ingredientRendered = recipe.ingridients.map((ingridient) => {
    const name = ingridient.name;
    const nameRendered = name.charAt(0).toUpperCase() + name.slice(1);

    total.push(ingridient.calories);
    totalСalories = total.reduce((a, b) => a + b, 0)

    return (
      <div className='ingredient__items'>
        <p className='ingredient__text_name' >{nameRendered}</p>
        <p className='ingredient__text_count'>{ingridient.count}</p>
        <p className='ingredient__text_measure'>{ingridient.measure}</p>
        <p className='ingredient__text_calories'>{ingridient.calories} ккал</p>
      </div>
    )
  });


  return (
    <div className='ingredient col-10 col-md-10 offset-md-1'>
      <div className='ingredient__subtitle_flex'>
        <h3 className='ingredient__subtitle'>ИНГРЕДИЕНТЫ</h3>
        <div className="ingredient__calories">Калорийность</div>
      </div>
      {ingredientRendered}
      <div className="ingredient__subtitle_flex">
        <div className="ingredient__text">
          <span className="ingredient__text_message">*Калорийность рассчитана для сырых продуктов</span>
        </div>
        <div className="ingredient__text">{totalСalories} ккал</div>
      </div>
    </div>
  )
}

export default Ingredient;