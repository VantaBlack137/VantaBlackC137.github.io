import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./Header";
import { Homepage } from "./Homepage";
import { Footer } from "./Footer";
import { ListaMaterii } from "./lista_materii";
import { Cls9 } from "./cls9side";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/materii" component={ListaMaterii} />
      <Route path="/lectie" component={Cls9} />
    </Switch>
    <Footer />
  </Router>,
  document.getElementById("content_render")
);
