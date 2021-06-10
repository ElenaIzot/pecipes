import "./App.css";
import "./styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer ";
import Card from "./Component/Card/Card";
import Main from "./Component/Main/Main";
import Grid from "./Component/Grid/Grid";
import Contact from "./Component/Contact";

import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
       <Header />
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/recipes" children={<Grid />} />
          <Route exact path="/cards/:id" children={<Card />} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
       <Footer />
    </Router>
    </>
  );
}

export default App;
