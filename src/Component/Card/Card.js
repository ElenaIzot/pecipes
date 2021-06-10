import Title from "../Title";
import Photo  from "./Photo";
import Ingredient from "./Ingredient";
import Instruction from "./Instruction";
import { Container } from "react-bootstrap";
import {BrowserRouter as Router, Link } from "react-router-dom";


function Card (){ 
    return(
        <Container className="card">
            <Title title={'американские блины'} />
            <Photo />
            <Ingredient />
            <Instruction />
            <Link to="/">Вернуться на главную</Link>
            <Link to="/recipes">Вернуться к рецептам</Link>
        </Container>
    )
};

export default Card;