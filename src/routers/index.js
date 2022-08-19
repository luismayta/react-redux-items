import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { checkCookie } from '../utils/cookies'
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      checkCookie() !== null ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location }
          }}
        />
      )
    }
  />
)

export default PrivateRoute
