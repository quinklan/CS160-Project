import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './Components/Routing/PrivateRoute';   
import NavbarWrapper from './Components/Navbar/NavbarWrapper';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Main from './Pages/Main/Main';
import Home from './Pages/Home/Home';
import Notes from './Pages/Notes/Notes';
import Visited from './Pages/Visited/Visited';
import Account from './Pages/Account/Account';

export default function Routing({appProps}){
  const signedInRoutes = [
    {
      Component: Home,
      path: '/home',
      redirect: '/login'
    },
    {
      Component: Notes,
      path: '/notes',
      redirect: '/login'
    },
    {
      Component: Visited,
      path: '/visited',
      redirect: '/login'
    },
    {
      Component: Account,
      Component:Account,
      path: '/account',
      redirect: '/login'
    },
    
  ]
  const routes = [
    {
      Component: Login,
      path: "/",
    },
    {
      Component: Login,
      path: "/login",
    },
    {
      Component: SignUp,
      path: '/signup'
    },
  ] 

    return (
      <Router>
        <Switch>
          {signedInRoutes.map(({path, Component, redirect}, index) => {
             return (
              <PrivateRoute
                key={index}
                exact
                path={path}
                appProps={{
                  user: appProps.user,
                  redirect,
                  ...appProps
                }}
                component={props => (
                  <NavbarWrapper
                    component={Component}
                    {...props}
                    {...appProps}
                  />
                )}
              />
            );
          })
        }
          {routes.map(({path, Component}, index) => {
            return <Route
              key = {index}
              exact
              path = {path}
              render = {props => {
                  return <NavbarWrapper {...appProps} component = {Component}></NavbarWrapper>
                }
              }
            >
            </Route>
          })}
        </Switch>
      </Router>
    )
}