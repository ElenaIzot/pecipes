import { Container,Carousel } from "react-bootstrap";
import Title from "../Title";
import { Row, Col } from "react-bootstrap";

function Main (){
    return(
        <Container className="section-content">
            <Row>
                <Col xs={1} md={1}></Col>
                <Col xs={10} md={10}> 
                    <Title title={'рецепты'} />
                    <div className="section-content__text">
                    "Кулинария — как любовь: в неё либо нужно окунуться с головой, либо вообще не погружаться."
                    </div>
                    <div className="section-content__author">Гарриет Ван Хорн</div>
                </Col>
                <Col xs={1} md={1}></Col>
                <Slider  className="slider"/>
            </Row> 
        </Container>
    )
}

function Slider () {
    return(
        <Carousel>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/7634700/pexels-photo-7634700.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            // "https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            />
            <Carousel.Caption>
            <h3>World cuisine</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
            <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Second slide"
            />
            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/4262002/pexels-photo-4262002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    )
}

export default Main;