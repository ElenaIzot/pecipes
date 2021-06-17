import { Row, Col, Pagination, Card } from "react-bootstrap";
import { Route, Link, useParams, useLocation, useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import Recipe from "../Recipe/Recipe";
import { getRecipesFromServer } from '../../Models/Recipets';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Grid() {
  const query = useQuery();
  const pageNumber = parseInt(query.get("page") || '0');

  const response = getRecipesFromServer(pageNumber);
  const recipesRendered = response.result.map(recipe => {
    return (
      <Col xs={6} md={3}>
        <GridItem key={recipe.id} recipe={recipe}></GridItem>
      </Col>
    )
  });

  return (
    <Container className="section-resipes">
      <Row>
        {recipesRendered}
        <Route exact path="/recipes/card/:id" children={<Recipe />} />
      </Row>
      <Pages className="section-resipes__pages" totalPages={response}> </Pages>
    </Container>
  )
}

function GridItem({ recipe }) {
  const link = `recipes/cards/${recipe.id}`;

  return (
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


function Pages() {
  const query = useQuery();
  const history = useHistory();
  const pageNumber = parseInt(query.get("page") || '0');
  const response = getRecipesFromServer(pageNumber);
  const { totalPages, nextPage, prevPage, currentPage, result } = response;
 
  let items = [];


  function handleClickNext(e) {
    e.preventDefault();
    const link = `/recipes/?page=${nextPage}`;
    history.push(link);
  }

  function handleClickPrev(e) {
    e.preventDefault();
    const link = `/recipes/?page=${prevPage}`;
    history.push(link);
  }

  const pageNeighbours = 5;
  const startPage = Math.max(1, currentPage - pageNeighbours);
  const endPage = Math.min(totalPages, currentPage + pageNeighbours);

  for (let page = startPage; page <= endPage; page++) {
    function navigate() {
      const link = `/recipes/?page=${page}`;
      history.push(link)
    }

    items.push(
      <Pagination.Item key={page} active={page === currentPage} onClick={navigate}>
        {page}
      </Pagination.Item>
    );
  }

  if (currentPage == 1) {
    return (
      <Pagination className="pagination justify-content-center pages" variant="outline-secondary">
        {items}
        <Pagination.Next onClick={handleClickNext}>Следующая</Pagination.Next>
      </Pagination>
    )
  } else if (currentPage == totalPages) {
    return (
      <Pagination className="pagination justify-content-center pages" variant="outline-secondary">
        <Pagination.Next onClick={handleClickPrev}>Предыдущая</Pagination.Next>
        {items}
      </Pagination>
    )
  } else {
    return (
      <Pagination className="pagination justify-content-center pages" variant="outline-secondary">
        <Pagination.Next onClick={handleClickPrev}>Предыдущая</Pagination.Next>
        {items}
        <Pagination.Next onClick={handleClickNext}>Следующая</Pagination.Next>
      </Pagination>
    )
  }
};

export default Grid;