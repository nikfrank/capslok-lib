import React, { Component } from 'react';
import './App.css';

import ResponsiveNav from './ResponsiveNav';

const items = ['Home', 'Work', 'About', 'Contact', 'Press'];

class App extends Component {
  state = { menuOpen: false }

  toggleMenu = ()=> this.setState(
    state => ({ menuOpen: !state.menuOpen })
  )
  
  setNav = (item)=>{
    console.log(item);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ResponsiveNav navItems={items}
                         onClick={this.setNav}
                         toggleMenu={this.toggleMenu}
                         menuOpen={this.state.menuOpen}
          />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
