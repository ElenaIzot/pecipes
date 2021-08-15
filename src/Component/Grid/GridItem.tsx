import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

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
          <Link className="card__link" to={link}>Открыть рецепт</Link>
        </Card.Body>
      </Card>
    )
  }


export default GridItem;