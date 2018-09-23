import React, { Component } from 'react';
import './NavDrop.css';
import MenuIcon from './MenuIcon.svg';

export default ({ navItems, onClick, toggleMenu, menuOpen, children=[] })=> (
  [
    (children.length !== 0 ? children : (
      <MenuIcon onClick={toggleMenu} size={50} key='btn'/>
    )),
    <ul key='ul' className={'MenuDropDown '+(menuOpen ? 'open':'closed')}>
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
