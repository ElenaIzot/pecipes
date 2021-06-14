import { Row, Col, Pagination, Card, Button } from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route, Link, useParams, useLocation, useHistory} from "react-router-dom";
// import GridItem from "./GridItem";
import { Container } from "react-bootstrap";

import  Recipe from "../Recipe/Recipe";
import { getRecipes, getRecipesFromServer } from '../../Models/Recipets';

function useQuery() {
     return new URLSearchParams(useLocation().search);
}

function Grid() {
    let query = useQuery();
    const pageNumber = parseInt(query.get("page") || '0');

    const response = getRecipesFromServer(pageNumber);
    const recipesRendered = response.result.map(recipe => {
      return (
        <Col xs={6} md={3}>
              <GridItem key={recipe.id} recipe={recipe}></GridItem>
        </Col>
      )
    });

    const linkToNextPage = `/recipes/?page=${response.nextPage}`;
    const linkToPrevPage = `/recipes/?page=${response.prevPage}`;

    return (
      <Container className="section-resipes">
        <Row>
            {recipesRendered}
          <Route exact path="/recipes/card/:id" children={<Recipe />} />
        </Row>

        <Link to={linkToPrevPage}>PrevPage</Link>
        <span>Page №{pageNumber}</span>
        <Link to={linkToNextPage}>NextPage</Link>

        <Pages className="section-resipes__pages" totalPages={response.totalPages}> </Pages>
      </Container>
    )
}


function GridItem({ recipe }) {
    const link = `recipes/cards/${recipe.id}`;

  return(
      <Card className="card">
          <Card.Img variant="top" src={recipe.image} />
      <Card.Body>
              <Card.Title className="card__title">Рецепт № {recipe.id} </Card.Title>
              <Card.Text className="card__text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Link className="card__link" to={link}>Открыть рецепт {recipe.id}</Link>
      </Card.Body>
      </Card>
  )
}


function Pages({ totalPages }) {
    let active = 1;
    let items = [];
    for (let page = 1; page <= totalPages; page++) {
      items.push(
          <Pagination.Item key={page} active={page === active}>
              {page}
        </Pagination.Item>,
      );
    }

    return(
    <Pagination className="pagination justify-content-center pages" variant="outline-secondary">
      <Pagination.Prev className="outline-secondary">Предыдущая </Pagination.Prev>
     {items}
     <Pagination.Next >Следующая</Pagination.Next>
    </Pagination>
    )
}

export default Grid;