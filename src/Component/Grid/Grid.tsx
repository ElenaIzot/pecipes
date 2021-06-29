import { Row, Col, Pagination, Card, Spinner, Button } from "react-bootstrap";
import { Route, Link, useLocation, useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import Recipe from "../Recipe/Recipe";
import { getRecipesFromServerAsync, IPage, IRecipe, } from '../../Models/Recipets';
import { useState, useEffect } from 'react';


function useQuery(): URLSearchParams {
  return new URLSearchParams(useLocation().search);
}

function Grid(): JSX.Element  {
  const query: URLSearchParams = useQuery();
  const pageNumber: number = parseInt(query.get("page") || '0');

  const [isLoading, setIsLoading]= useState<boolean>(true);
  const [page, setPage] = useState<IPage<IRecipe>>({
    totalPages: 0,
    nextPage: 0,
    prevPage: 0,
    currentPage: 0,
    result: [],
  });

  useEffect(() => {
    getRecipesFromServerAsync(pageNumber).then(response => {
      setPage(response)
      setIsLoading(false);
    })
  }, [page]);

  if (isLoading === true) {
    return (
      <Container className="section-resipes">
        <div className="page-loader">
          <div className="page-loader__text">Идет загрузка</div>
          <Spinner animation="border" variant="secondary" className="page-loader__spinner"></Spinner>
        </div>
        <Route exact path="/recipes/card/:id" children={<Recipe />} />
        <Pages /> 
      </Container>
    )
  } else {
    let recipesRendered: JSX.Element[] = page.result.map(recipe => {
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
        <Pages />
      </Container>
    )
  }
}

function GridItem({ recipe }: any): JSX.Element {
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

function Pages(): JSX.Element {
  const query: URLSearchParams = useQuery();
  const history = useHistory();
  const pageNumber:number = parseInt(query.get("page") || '0')

  const [page, setPage] = useState<IPage<IRecipe>>({
    totalPages: 0,
    nextPage: 0,
    prevPage: 0,
    currentPage: 0,
    result: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRecipesFromServerAsync(pageNumber).then(response => {
      setPage(response)
      console.log(response)
      setIsLoading(false);
    });
  }, [page]);

  let items: JSX.Element[]= [];

  function handleClickNext(): void {
    const link: string = `/recipes/?page=${page.nextPage}`;
    history.push(link);
  }

  function handleClickPrev(): void  {
    const link: string = `/recipes/?page=${page.prevPage}`;
    history.push(link);
  }

  const pageNeighbours: number = 5;
  const startPage: number = Math.max(1, page.currentPage - pageNeighbours);
  const endPage: number = Math.min(page.totalPages, page.currentPage + pageNeighbours);

  for (let thisPage = startPage; thisPage <= endPage; thisPage++) {
   let navigate = () => {
      const link: string = `/recipes/?page=${thisPage}`;
      history.push(link)
    }

    items.push(
      // <Button  variant="outline-secondary" key={thisPage} active={thisPage === page.currentPage} onClick={navigate}>
      //   {thisPage}
      // </Button>

//СИНИЙ АКТИВНЫЙ ПОМЕНЯТЬ НУЖНО
      <Pagination.Item key={thisPage} active={thisPage === page.currentPage} onClick={navigate}>
        {thisPage}
      </Pagination.Item>
    );
  }
 
  if (page.currentPage == 1) {
    return (
      <div className="section-resipes__pages">
      <Pagination className="pagination justify-content-center pages">
        {items}
        <Pagination.Next onClick={handleClickNext}>Следующая</Pagination.Next>
      </Pagination>
      </div>
    )
  } else if (page.currentPage == page.totalPages) {
    return (
      <div className="section-resipes__pages">
      <Pagination className="pagination justify-content-center pages">
      {/* <Pagination className="pagination justify-content-center pages" variant="outline-secondary"> */}
        <Pagination.Next onClick={handleClickPrev}>Предыдущая</Pagination.Next>
        {items}
      </Pagination>
      </div>
    )
  } else {
    return (
      <div className="section-resipes__pages">
      <Pagination className="pagination justify-content-center pages">
      {/* <Pagination className="pagination justify-content-center pages" variant="outline-secondary"> */}
        <Pagination.Next onClick={handleClickPrev}>Предыдущая</Pagination.Next>
        {items}
        <Pagination.Next onClick={handleClickNext}>Следующая</Pagination.Next>
      </Pagination>
      </div>
    )
  }
};

export default Grid;