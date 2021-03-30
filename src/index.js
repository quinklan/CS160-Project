import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routing from './Routing';
import { withRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import createTypography from '@material-ui/core/styles/';
import createPalette from '@material-ui/core/styles/';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00E3AA'
    },
    secondary:{
      main: '#FFFFFF'
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
  
  return (
    <ThemeProvider theme = {theme}>
      <Routing/>
    </ThemeProvider>
  )
}

export default withRouter(App);

ReactDOM.render(<App />, document.getElementById('root'));



