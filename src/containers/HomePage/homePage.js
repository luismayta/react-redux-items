import React, {Component} from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Results from "../../components/results";
import Details from "../../components/details";

class HomePage extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/results" component={Results} />
          <Route path="/details/:itemId" component={Details} />
          <Redirect from="/" to="/results" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default HomePage;
