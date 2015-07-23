import React from 'react';

import Nav from './Nav';


export default class ProgressItem extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    percentage: React.PropTypes.number.isRequired
  };

  render() {
    return (
      <di>
        <dt>{this.props.name}</dt>
        <dd class="code"><span style="width: {this.props.percentage}%">{this.props.percentage}%</span></dd>
      </di>
    );
  }
}
