import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import {BrowserRouter as Router} from "react-router-dom";

function Header(): JSX.Element {
    return(
     <div className="header">
    <Router>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand className="logo" href="#home">Еда</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto menu">
        <a className="menu__link" href="/">Главная</a>
        <a className="menu__link" href="/recipes">Рецепты</a>
        <a className="menu__link" href="/contact">Контакты</a> 

        </Nav>
        <Form inline className="search-form">
          <FormControl className="input mr-sm-2" type="text" placeholder="Поиск"/>
          <Button className="button" variant="outline-secondary">Поиск</Button>
        </Form>
      </Navbar.Collapse>
      </Navbar>
      </Router>
      </div> 
    )
}

export default Header;