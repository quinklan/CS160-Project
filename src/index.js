import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routing from './Routing';
import { withRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import createTypography from '@material-ui/core/styles/';
import createPalette from '@material-ui/core/styles/';
import {checkIfUserIsSignedIn} from './ApiFunctions/User';
import { teal } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1de9b6'
    },
    secondary:{
      main: '#3a3a3a'
    }
  },
  text:{
    primary: {
      main: '#FFFFFF'
    },
    hint:{
      main: 'white'
    }
  },
  typography:{
    fontFamily: "'Lato', sans-serif",
  }
})
function App(props){
  const [authenticated, setAuthenticated] = useState(false)
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [user, setUser] = useState();

  async function getAuthStatus() {
    setIsAuthenticating(true);
    const authStatus = await checkIfUserIsSignedIn();
    if(authStatus && authStatus.data){
      setAuthenticated(authStatus.data.verified);
    }
    if(authStatus) setUser({ token: authStatus.config.data, ...authStatus.data });
    setIsAuthenticating(false);
  }

  useEffect(() => {
    getAuthStatus();
  }, []);

  return (
    !isAuthenticating && (
      <ThemeProvider theme = {theme}>
        <Routing appProps = {{authenticated, setAuthenticated, user}}/>
      </ThemeProvider>
    )
  );
}

export default withRouter(App);

ReactDOM.render(<App />, document.getElementById('root'));



