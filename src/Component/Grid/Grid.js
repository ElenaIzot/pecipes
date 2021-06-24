import { Row, Col, Pagination, Card, Spinner } from "react-bootstrap";
import { Route, Link, useLocation, useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import Recipe from "../Recipe/Recipe";
import { getRecipesFromServerAsync } from '../../Models/Recipets';
import { useState, useEffect } from 'react';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Grid() {
  const query = useQuery();
  const pageNumber = parseInt(query.get("page") || '0');

  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState({});

  useEffect(() => {
    getRecipesFromServerAsync(pageNumber).then(response => {
      setPage(response)
      setIsLoading(false);
    })
  }, [page]);

  // function handleClick() {
    
  //   console.log('По ссылке кликнули.');
  //   return (setIsLoading(true));
  // }

  if (isLoading === true) {
    return (
      <Container className="section-resipes">
        <div className="page-loader">
          <div className="page-loader__text">Идет загрузка</div>
          <Spinner animation="border" variant="secondary" className="page-loader__spinner"></Spinner>
        </div>
        <Route exact path="/recipes/card/:id" children={<Recipe />} />
        <Pages className="section-resipes__pages" totalPages={page.totalPages}> </Pages>
      </Container>
    )
  } else {
    let recipesRendered = page.result.map(recipe => {
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
        <Pages className="section-resipes__pages" totalPages={page.totalPages}> </Pages>
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    getRecipesFromServerAsync(pageNumber).then(response => {
      setPage(response)
      setIsLoading(false);
    });


  }, [page]);

  let items = [];

  function handleClickNext(e) {
    e.preventDefault();
    const link = `/recipes/?page=${page.nextPage}`;
    history.push(link);
  }

  function handleClickPrev(e) {
    e.preventDefault();
    const link = `/recipes/?page=${page.prevPage}`;
    history.push(link);

  }

  const pageNeighbours = 5;
  const startPage = Math.max(1, page.currentPage - pageNeighbours);
  const endPage = Math.min(page.totalPages, page.currentPage + pageNeighbours);

  for (let page = startPage; page <= endPage; page++) {
    function navigate() {
      const link = `/recipes/?page=${page}`;

      history.push(link)
    }

    items.push(
      <Pagination.Item key={page} active={page === page.currentPage} onClick={navigate}>
        {page}
      </Pagination.Item>
    );
  }

  if (page.currentPage == 1) {
    return (
      <Pagination className="pagination justify-content-center pages" variant="outline-secondary">
        {items}
        <Pagination.Next onClick={handleClickNext}>Следующая</Pagination.Next>
      </Pagination>
    )
  } else if (page.currentPage == page.totalPages) {
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