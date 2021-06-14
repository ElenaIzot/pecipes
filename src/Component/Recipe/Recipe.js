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
    let title = 'американские блины';
    let result = title.charAt(0).toUpperCase() + title.slice(1);

    return(
        <Container className="section-resipes recipe">

           
            <h1 className="recipe__title">{result} {recipe.id}</h1>
            <Image  src={recipe.image} fluid />
            <Ingredient />
            <Instruction />
            <Link to="/">Вернуться на главную</Link>
            <Link to="/recipes">Вернуться к рецептам</Link>
        </Container>
    )
};

export default Recipe;