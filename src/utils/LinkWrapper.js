import React from 'react';
import { NavLink } from 'react-router-dom';

const LinkWrapper = props => {
  return (
    <NavLink activeStyle={{textDecoration: 'underline'}} {...props}/>
  );
}

export default LinkWrapper;
