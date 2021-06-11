import { Row, Col, Pagination, Card, Button } from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route, Link, useParams, useLocation, useHistory} from "react-router-dom";
// import GridItem from "./GridItem";
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

    const linkToNextPage = `/recipes/?page=${response.page + 1}`;
    const linkToPrevPage = `/recipes/?page=${response.page - 1}`;

    return (
      <div>
        <Row>
                {recipesRendered}
          <Route exact path="/recipes/card/:id" children={<Recipe />} />
        </Row>

        <Link to={linkToPrevPage}>PrevPage</Link>
        <span>Page №{pageNumber}</span>
        <Link to={linkToNextPage}>NextPage</Link>

            <Pages totalPages={response.totalPages}> </Pages>
      </div>
    )
}


function GridItem({ recipe }) {
    const link = `recipes/cards/${recipe.id}`;

  return(
      <Card>
          <Card.Img variant="top" src={recipe.image} />
      <Card.Body>
              <Card.Title>Рецепт № {recipe.id} </Card.Title>
              <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Link to={link}>Открыть рецепт {recipe.id}</Link>
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
    <Pagination>
     {items}
    </Pagination>
    )
}

export default Grid;