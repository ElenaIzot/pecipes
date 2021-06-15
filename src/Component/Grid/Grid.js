import { Row, Col, Pagination, Card } from "react-bootstrap";
import {Route, Link, useParams, useLocation, useHistory} from "react-router-dom";
import { Container } from "react-bootstrap";
import { Component, useState } from "react";
import  Recipe from "../Recipe/Recipe";
import { getRecipesFromServer } from '../../Models/Recipets';

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

        <Pages className="section-resipes__pages" totalPages={response}> </Pages>
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


function Pages(){
  let query = useQuery();
  const pageNumber = parseInt(query.get("page") || '0');
  const response = getRecipesFromServer(pageNumber);
  
  let {totalPages,nextPage,prevPage,currentPage, result} = response;
  console.log(currentPage)
  console.log(result)
  let page = currentPage;
  let active = page;
  let items = [];

  function handleClick (e) {
    e.preventDefault();
    page = currentPage;
    console.log(page)
  }
  
  function handleClickNext (e) {
    e.preventDefault();
    page = nextPage;
    return result;
  }
  
  function handleClickPrev (e) {
    e.preventDefault();
      page = prevPage;
      currentPage = prevPage;
  }

  for (let page = 1; page <= totalPages; page++) {
      items.push(
          <Pagination.Item key={page} active={page === active} onClick={handleClick}>
              {page}
        </Pagination.Item>,
      );
  }

  return (
    <Pagination className="pagination justify-content-center pages" variant="outline-secondary">
      <Pagination.Prev className="outline-secondary" onClick={handleClickPrev}>Предыдущая </Pagination.Prev>
        {items}
     <Pagination.Next onClick={handleClickNext}>Следующая</Pagination.Next>
    </Pagination>
  )
};

export default Grid;



// class Page extends Component{
// constructor() {
//   super();
//   this.state = {
//     todos: [&#39;a&#39;,&#39;b&#39;,&#39;c&#39;,&#39;d&#39;,&#39;e&#39;,&#39;f&#39;,&#39;g&#39;],
//     currentPage: 1,
//     todosPerPage: 3
//   };
//   this.handleClick = this.handleClick.bind(this);
// }

// handleClick(event) {
//   this.setState({
//     currentPage: Number(event.target.id)
//   });
// }

// render() {
//   const { todos, currentPage, todosPerPage } = this.state;

//   // Logic for displaying todos
//   const indexOfLastTodo = currentPage * todosPerPage;
//   const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
//   const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

//   const renderTodos = currentTodos.map((todo, index) => {
//     return <li key={index}>{todo}</li>;
//   });

//   // Logic for displaying page numbers
//   const pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   const renderPageNumbers = pageNumbers.map(number => {
//     return (
//       <li
//         key={number}
//         id={number}
//         onClick={this.handleClick}
//       >
//         {number}
//       </li>
//     );
//   });

//   return (
//     <div>
//       <ul>
//         {renderTodos}
//       </ul>
//       <ul id="page-numbers">
//         {renderPageNumbers}
//       </ul>
//     </div>
//   );
// }
// }