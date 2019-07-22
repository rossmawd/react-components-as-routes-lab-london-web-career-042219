import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white'
   }
   
  return (
    <div className='navbar'>
      <NavLink
      to= '/'
      exact
      style={link}
      activeStyle={{background: 'black'}}
    
        >Home</NavLink>
      <NavLink
      to= '/movies'
      exact
      style={link}
      activeStyle={{background: 'black'}}
    
        >Movies</NavLink>
      <NavLink
      to= '/directors'
      exact
      style={link}
      activeStyle={{background: 'black'}}
    
        >Directors</NavLink>
      <NavLink
      to= '/actors'
      exact
      style={link}
      activeStyle={{background: 'black'}}
    
        >Actors</NavLink>
        
    </div>
  );
};

export default NavBar;
