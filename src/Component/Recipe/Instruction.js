import { getRecipe } from "../../Models/Recipets";
import { useParams, useHistory } from "react-router-dom";


function Instruction (){
    let history = useHistory();
    const { id } = useParams();

    const recipe = getRecipe(id);
     
    const instructionRendered = recipe.instruction.map((step, index) => {
      return (
            <li className='instruction__text' key={index}>
                {step}
            </li>
      )
    });
    
    return(
        <div className='instruction col-10 col-md-10 offset-md-1'> 
        <div className='instruction__subtitle_flex'>
            <h3 className='instruction__subtitle'>ИНСТРУКЦИЯ ПРИГОТОВЛЕНИЯ</h3>
            <div className="instruction__time">Время приготовления {recipe.time} минут</div>
        </div>
            <ol className='instruction__items'>
            {instructionRendered}
            </ol>
        </div>
    )

}

export default Instruction;