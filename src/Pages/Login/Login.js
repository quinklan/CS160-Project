import { TextField } from '@material-ui/core';
import React, { Component } from 'react';

import './login.css';

class Login extends Component{
  
  
  render(){
    const styles = {
      root: {
        background: "black"
      },
      input: {
        color: "white"
      }
    };
    return(
      <div className = 'login'>
        <h1>Login</h1>
        <div className = 'login-container'>
          <img  src={process.env.PUBLIC_URL + '/Logo.png'} /> 
          <TextField 
            // fullWidth = {true}
            margin = 'normal'
            style = {{width: 300}}
            // className = 'login-field' 
            label = 'Email'
            InputLabelProps= {{ style: {color: '#f3f3f3', borderBottomColor: 'white !important'}}}
            // inputProps={{ style: {color: 'white', borderColor: 'white !important'}}}
          />
          <TextField 
            label = 'Password'
            style = {{width: 300}}

            InputLabelProps= {{ style: {color: '#f3f3f3', borderBottomColor: 'white !important'}}}

            >
            
          </TextField>

        </div>
      </div>
    )
  }
}

export default Login;