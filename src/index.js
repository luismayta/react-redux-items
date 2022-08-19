import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Results from './components/results'
import Details from './components/details'
import HomePage from './containers/homePage'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route from="/" component={HomePage} />
        <Route path="/results" component={Results} />
        <Route path="/details/:itemId" component={Details} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
