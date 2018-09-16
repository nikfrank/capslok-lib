import React, { Component } from 'react';
import './ResponsiveNav.css';

export default ({ navItems, onClick, toggleMenu, menuOpen })=> (
  <div className='nav-container'>
    <div className='desktop-nav'>
      <div className='home-icon'>
        {navItems[0]}
      </div>
      <ul>
        {
          navItems.slice(1).map(item => (
            <li onClick={()=> onClick(item)} key={item}>
              {item}
            </li>
          ) )
        }
      </ul>
    </div>
    
    <div className='mobile-nav'>
      <div className='home-icon'>
        {navItems[0]}
      </div>

      <button onClick={toggleMenu}>Burger</button>
      { menuOpen ? (
          <ul>
            {
              navItems.slice(1).map(item => (
                <li onClick={()=> onClick(item)} key={item}>
                  {item}
                </li>
              ) )
            }
          </ul>
        ) : null }
    </div>
  </div>
);
