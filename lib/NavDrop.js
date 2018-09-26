import React, { Component } from 'react';
import './NavDrop.css';
import MenuIcon from './MenuIcon';

export default ({
  navItems,
  onClick,
  toggleMenu,
  menuOpen,
  transitionDuration='500ms',
  children=[]
})=> (
  [
    (children.length !== 0 ? children : (
      <MenuIcon onClick={toggleMenu} size={50} key='btn'/>
    )),
    <ul key='ul' className={'MenuDropDown '+(menuOpen ? 'open':'closed')}
        style={{ transitionDuration }}>
      {
        navItems.map(item => (
          <li onClick={()=> onClick(item)} key={item}>
            {item}
          </li>
        ) )
      }
    </ul>,
  ]
);
