import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ResponsiveNav from '../lib/ResponsiveNav';
import NavDrop from '../lib/NavDrop';

import './storybook.css';

const Button = ()=> <button/>;

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));


class NavDropEj extends Component {
  state = { open: false }
  toggleMenu = ()=> this.setState(s=> ({ open: !s.open }) )
  
  render(){
    return (
      <div className='nav-container'>
        <NavDrop navItems={['Home', 'Contact']}
                 toggleMenu={this.toggleMenu}
                 menuOpen={this.state.open}
                 onClick={(i=> console.log(i))}/>
      </div>
    );
  }
}

class NavDropEj2 extends Component {
  state = { open: false }
  toggleMenu = ()=> this.setState(s=> ({ open: !s.open }) )
  
  render(){
    return (
      <div className='nav-container ej2'>
        <NavDrop navItems={['Home', 'Contact']}
                 toggleMenu={this.toggleMenu}
                 menuOpen={this.state.open}
                 onClick={(i=> console.log(i))}>
          <button onClick={this.toggleMenu}>Menu</button>
        </NavDrop>
      </div>
    );
  }
}

storiesOf('ResponsiveNav', module)
  .add('r nav', ()=> (
    <div className='ResponsiveNav-rnav'>
      <ResponsiveNav navItems={['Home', 'Contact']}
                     toggleMenu={(()=>0)}
                     menuOpen={true}
                     onClick={(()=>0)} />
    </div>
  ) )

  .add('nav drop', ()=> (
    <NavDropEj />
  ) )
  .add('nav drop2', ()=> (
    <NavDropEj2 />
  ) );

