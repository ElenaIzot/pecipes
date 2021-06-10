import { Row, Col, Pagination, Card, Button } from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route, Link, useParams, useLocation, useHistory} from "react-router-dom";
// import GridItem from "./GridItem";
import  Recipe from "../Recipe/Recipe";

function useQuery() {
     return new URLSearchParams(useLocation().search);
}

function Grid() {
    let query = useQuery();
    const pageNumber = parseInt(query.get("page") || '0');
    console.log(pageNumber);


    const cards = getCards(pageNumber);
    const cardsRendered = cards.map(card => {
      const link = `recipes/cards/${card.id}`;
      return (
        <Col xs={6} md={3}>
            <GridItem key={card.id}></GridItem>
            <Link to={link}>Открыть рецепт {card.id}</Link>
        </Col>
      )
    });
 
    const linkToNextPage = `/recipes/?page=${pageNumber + 1}`;
    const linkToPrevPage = `/recipes/?page=${pageNumber - 1}`;

    return (
      <div>
        <Row>
          {cardsRendered}
          <Route exact path="/recipes/card/:id" children={<Recipe />} />
        </Row>
         
        
        <Link to={linkToPrevPage}>PrevPage</Link>
        <span>Page №{pageNumber}</span>
        <Link to={linkToNextPage}>NextPage</Link>

        <Pages> </Pages>
      </div>
    )
}

function getCards(pageNumber) {
  const CARDS_PER_PAGE = 16;
  const cards = [];
 
  
  for (let i = 1; i <= CARDS_PER_PAGE; ++i) {
    const cardIndex = pageNumber * CARDS_PER_PAGE + i;
    cards.push({
      id: cardIndex,
    });
  }
  
  return cards;
}


function GridItem() {
  let history = useHistory();

  let { id } = useParams(); //ID не получает! ПОЭТОМУ НЕ ВЫВОДИТ НОМЕР РЕЦЕПТА В ТЕКСТЕ
  console.log({id})
  return(
      <Card> 
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
              <Card.Title>Рецепт № {id} </Card.Title> 
              <Card.Text> 
              Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Link to="`recipes/cards/:${id}`">Открыть рецепт </Link>
              
      </Card.Body>
      </Card>
  )
}



function Pages (pageNumber) {
    let active = 1;
    let items = [];
    for (let number = 1; number <= 20; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
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