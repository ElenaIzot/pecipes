import Ingredient from "./Ingredient";
import Instruction from "./Instruction";
import { Container } from "react-bootstrap";
import {Link, useParams, useHistory } from "react-router-dom";
import Image from 'react-bootstrap/Image'
import { getRecipe } from "../../Models/Recipets";


function Recipe() {
    let history = useHistory();
    let { id } = useParams();

    const recipe = getRecipe(id);

    const title = recipe.title;
    const titleRendered = title.charAt(0).toUpperCase() + title.slice(1);

    return(
        <Container className="section-resipes recipe">
            <h1 className="recipe__title">{titleRendered}</h1> 
            <Image className="recipe__photo img-fluid mx-auto d-block" src={recipe.image} fluid />
            <Ingredient className='ingredient col-10 col-md-10' />
            <Instruction />
            <Link className="recipe__link  recipe__link col-2 offset-md-5" to="/recipes">Вернуться к рецептам</Link>
        </Container>
    )
};

export default Recipe;