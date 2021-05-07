import React from 'react';
// import DefaultNavbar from '../../Components/Navbar/DefaultNavbar';
import './home.css'
const Home = (props) =>  {
  return(
    <div className = 'home'>
        <h1>Welcome to Gamer Nation</h1>
        <img className = 'home-logo' src={process.env.PUBLIC_URL + '/Logo.png'} /> 
        
    </div>
    
  )
}


export default Home;