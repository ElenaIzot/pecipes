import { Container } from "react-bootstrap";

function Contact (){
    let title = 'наши контакты';
    let result = title.charAt(0).toUpperCase() + title.slice(1);

    return(
        <Container className="section-content">
            <div className="section-content__text">
                <h1 className="section-content__title">{result}</h1>
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