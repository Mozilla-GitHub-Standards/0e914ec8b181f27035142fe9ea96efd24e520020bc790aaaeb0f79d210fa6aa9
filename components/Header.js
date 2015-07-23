import {NavLink} from 'fluxible-router';
import React from 'react';

import Nav from './Nav';


export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>
          <a className="wordmark" href="https://marketplace.firefox.com">Firefox Marketplace</a>
          <NavLink className="site-name" routeName="activity">Jugband</NavLink>
        </h1>
        <button className="hamburger"><span>Toggle Menu</span></button>
        <Nav/>
      </header>
    );
  }
}
