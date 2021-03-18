// import React from 'react';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function Routing({appProps}){
  const routes = [
    {
      Component: Home,
      path: "/",
    }
  ]

    return (
      <Router>
        <Switch>
          {routes.map(({path, Component}, index) => {
            return <Route
              key = {index}
              exact
              path = {path}
              component = {Component}
            >
            </Route>
          })}
        </Switch>
      </Router>
    )
}