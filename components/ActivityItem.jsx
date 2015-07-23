import React from 'react';

import Progress from './Progress';


export default class ActivityItem extends React.Component {
  render() {
    return (
      <article>
        <h2>{this.props.item.name}</h2>
      </article>
    );
  }
}
