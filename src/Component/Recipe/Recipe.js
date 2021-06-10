import Title from "../Title";
import Photo  from "./Photo";
import Ingredient from "./Ingredient";
import Instruction from "./Instruction";
import { Container } from "react-bootstrap";
import {Link, useParams, useHistory } from "react-router-dom";


function Recipe (){ 
    let history = useHistory();
    let { id } = useParams();

    return(
        <Container className="card">
            <Title title={`американские блины${id}`}> </Title>
            <Photo />
            <Ingredient />
            <Instruction />
            <Link to="/">Вернуться на главную</Link>
            <Link to="/recipes">Вернуться к рецептам</Link>
        </Container>
    )
};

export default Recipe;