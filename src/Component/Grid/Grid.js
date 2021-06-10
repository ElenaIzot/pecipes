import { Row, Col, Pagination, Card, Button } from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route, Link, useParams, useLocation, useHistory} from "react-router-dom";

function useQuery() {
     return new URLSearchParams(useLocation().search);
}

function Grid() {
    let query = useQuery();
    const pageNumber = parseInt(query.get("page") || '0');

    const cards = getCards(pageNumber);
    const cardsRendered = cards.map(card => {
        const link = `/cards/${card.id}`;
      
        return (
          <Col xs={6} md={3}>
              <GridItem key={card.id}></GridItem>
              <Link to={link}> {card.id} </Link> 
          </Col>
      )
    });
    
 
    const linkToNextPage = `/?page=${pageNumber + 1}`;
    
    return (
      <div>
      
        <Row>
          {cardsRendered}
        </Row>
         
        <span>Page №{pageNumber}</span>
        <Link to={linkToNextPage}>NextPage</Link>
        <Pages> </Pages>
      </div>
    )


}

function getCards(pageNumber) {
  const CARDS_PER_PAGE = 16;
  const cards = [];
  const pageCount = Math.ceil(cards.length / CARDS_PER_PAGE);
  
  for (let i = 1; i <= CARDS_PER_PAGE; ++i) {
    const cardIndex = pageNumber * CARDS_PER_PAGE + i;
    cards.push({
      id: cardIndex,
    });
   console.log(cards)
  }
  
  return cards;
}

function GridItem() {
    let history = useHistory();
    let { id } = useParams();
  
    return(
        <Card> 
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
                <Card.Title>Рецепт № {id}</Card.Title>
                <Card.Text> 
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
        </Card.Body>
        </Card>
    )
}

function Pages () {
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
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item >{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
    </Pagination>
    )
}

export default Grid;