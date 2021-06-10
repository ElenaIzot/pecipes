import { Container } from "react-bootstrap";
import Title from "../Title";
import Text from "./Text";
import { Row, Col } from "react-bootstrap";
function Main (){
    return(
        <Container className="section-mainpage">
            <Row>
                <Col xs={1} md={1}></Col>
                <Col xs={10} md={10}> 
                    <Title title={'рецепты'} />
                    <Text />  
                </Col>
                <Col xs={1} md={1}></Col>
            </Row> 
        </Container>
    )
}

export default Main;