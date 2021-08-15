import "./App.css";
import "./styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer ";
import Recipe  from "./Component/Recipe/Recipe";
import Main from "./Component/Main/Main";
import Grid from "./Component/Grid/Grid";
import Contact from "./Component/Contact";
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
       <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/recipes" children={<Grid />} />
          <Route exact path="/recipes/cards/:id" children={<Recipe />} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
       <Footer />
    </Router>

    </>
  );
}

export default App;
