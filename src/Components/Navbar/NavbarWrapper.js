import React from 'react';
import DefaultNavbar from './DefaultNavbar';

const NavbarWrapper = ({
  component: Component,
}) => {
  {console.log("hi")}
  return (
    <React.Fragment>
      <DefaultNavbar/>
      <Component></Component>
    </React.Fragment>
  )
}

export default NavbarWrapper;
