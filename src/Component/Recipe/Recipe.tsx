import Ingredient from "./Ingredient";
import Instruction from "./Instruction";
import { Container } from "react-bootstrap";
import {Link, useParams } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import { getRecipe, IRecipe } from "../../Models/Recipets";

function Recipe(): JSX.Element  {
    const { id }: any = useParams();
    const recipe = getRecipe(id);
    
    const title: string = recipe.title;
    const titleRendered: string = title.charAt(0).toUpperCase() + title.slice(1);

    return(
        <Container className="section-resipes recipe">
            <h1 className="recipe__title" data-tooltip="Всплывающая подсказка">{titleRendered}</h1> 
            <Image className="recipe__photo img-fluid mx-auto d-block rounded" src={recipe.image}/>
            <Ingredient />
            <Instruction />
            <Link className="recipe__link col-2 offset-md-5" to="/recipes">Вернуться к рецептам</Link>
        </Container>
    )
};

export default Recipe;