import { Row, Col, Pagination, Card, Spinner } from "react-bootstrap";
import { Route, Link, useLocation, useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import Recipe from "../Recipe/Recipe";
import { getRecipesFromServerAsync } from '../../Models/Recipets';
import { useState, useEffect } from 'react';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

// function loading(){
//   if(){
//     setIsLoading(true);
//   }
// }

function Grid() {
  const query = useQuery();
  const pageNumber = parseInt(query.get("page") || '0');

  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState({});

  useEffect(() => {
    getRecipesFromServerAsync(pageNumber).then(response => {
      setPage(response)
    });
    setIsLoading({ isLoading: false });

  }, []);

  const { totalPages, result } = page;
  let arrayRecipes = [];
  let recipesRendered = [];

  if ({isLoading} == true) {
    return (
      <Container className="section-resipes">
        <Row>
          <div>Идет загрузка...</div>
          <Spinner animation="border" variant="secondary"></Spinner> 
          <Route exact path="/recipes/card/:id" children={<Recipe />} />
        </Row>
        <Pages className="section-resipes__pages" totalPages={totalPages}> </Pages>
      </Container>
    )
  } else {
    for (let elem in result) {
      arrayRecipes.push(result[elem])
    }

    recipesRendered = arrayRecipes.map(recipe => {
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
        <Pages className="section-resipes__pages" totalPages={totalPages}> </Pages>
      </Container>
    )
  }

}

function GridItem({ recipe }) {
  const link = `recipes/cards/${recipe.id}`;

  return (
    <Card className="card">
      <Card.Img variant="top" src={recipe.image} />
      <Card.Body>
        <Card.Title className="card__title">{recipe.title}</Card.Title>
        <Card.Text className="card__text">
          <div className="card__time">Время приготовления {recipe.time} мин</div>
          <div className="card__text">Ингридиентов: {recipe.ingridients.length}</div>
          <div className="card__text">Количество порций: {recipe.portions}</div>
        </Card.Text>
        <Link className="card__link" to={link}>Открыть рецепт {recipe.id}</Link>
      </Card.Body>
    </Card>
  )
}


function Pages() {
  const query = useQuery();
  const history = useHistory();
  const pageNumber = parseInt(query.get("page") || '0')
  const [page, setPage] = useState({});

  useEffect(() => {
    getRecipesFromServerAsync(pageNumber).then(response => {
      setPage(response);
    })
  }, [page]);

  const { totalPages, nextPage, prevPage, currentPage } = page;
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