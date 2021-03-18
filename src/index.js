import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routing from './Routing';
import { withRouter } from 'react-router-dom';
function App(props){
  return (
    <Routing></Routing>
  )
}

export default withRouter(App);

ReactDOM.render(<App />, document.getElementById('root'));



