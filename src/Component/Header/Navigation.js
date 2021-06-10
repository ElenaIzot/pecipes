import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import {BrowserRouter as Router} from "react-router-dom";

function Navigation (){
    return(
    <>
    <Router>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Еда</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <a href="/">Главная</a>
        <a href="/recipes">Рецепты</a>
        <a href="/contact">Контакты</a>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Поиск" className="mr-sm-2" />
          <Button variant="outline-success">Поиск</Button>
        </Form>
      </Navbar.Collapse>
      </Navbar>
      </Router>
    </>
    )
}

export default Navigation;