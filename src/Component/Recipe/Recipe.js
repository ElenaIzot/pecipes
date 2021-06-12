import Title from "../Title";
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

    return(
        <Container className="section-resipes recipe">
            <Title title={`американские блины ${recipe.id}`}> </Title>
            <Image src={recipe.image} fluid />
            <Ingredient />
            <Instruction />
            <Link to="/">Вернуться на главную</Link>
            <Link to="/recipes">Вернуться к рецептам</Link>
        </Container>
    )
};

export default Recipe;