import Title from "./Title";
import { Container } from "react-bootstrap";

function Contact (){
    return(
        <Container className="section-content">
            <div className="section-content__text">
                <Title title={'наши контакты:'} />
                <div className="section-content__text">
                <br></br>
                666-555-666
                <br></br>
                777-333-777  
                </div>
            </div>
        </Container>
    )
}



export default Contact;