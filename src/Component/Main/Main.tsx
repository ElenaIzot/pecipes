import { Container, Carousel } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

function Main(): JSX.Element {
    let title: string = 'рецепты';
    let result: string = title.charAt(0).toUpperCase() + title.slice(1);

    return (
        <div className="section-content">
            <h1 className="section-content__title">{result}</h1>
            <p className="section-content__text">
                "Кулинария — как любовь: в неё либо нужно окунуться с головой, либо вообще не погружаться."
            </p>
            <div className="section-content__text section-content__text_bold">
                Гарриет Ван Хорн
            </div>
            <Slider />
        </div>
    )
}

function Slider(): JSX.Element {
    return (
            <Carousel className="carousel img-fluid col-10 col-md-10 offset-md-1">
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/7634700/pexels-photo-7634700.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Блюда со всего мира</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/4262002/pexels-photo-4262002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    )
}

export default Main;