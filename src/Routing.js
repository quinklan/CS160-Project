// import React from 'react';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarWrapper from './Components/Navbar/NavbarWrapper';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
export default function Routing({appProps}){
  const routes = [
    {
      Component: Home,
      path: "/",
    },
    {
      Component: Login,
      path: "/login",
    },
    {
      Component: SignUp,
      path: '/signup'
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
              render = {props => {
                  return <NavbarWrapper component = {Component}></NavbarWrapper>
                }
              }
            >
            </Route>
          })}
        </Switch>
      </Router>
    )
}