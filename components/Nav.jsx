import {NavLink} from 'fluxible-router';
import React from 'react';

export default class Nav extends React.Component {
  render() {
    return (
      <nav role="navigation">
        <ul>
          <li><NavLink routeName="roadmap" activeClass="active">Roadmap</NavLink></li>
          <li><NavLink routeName="ondeck" activeClass="active">On Deck</NavLink></li>
          <li><NavLink routeName="activity" activeClass="active">Activity</NavLink></li>
        </ul>
      </nav>
    );
  }
}
