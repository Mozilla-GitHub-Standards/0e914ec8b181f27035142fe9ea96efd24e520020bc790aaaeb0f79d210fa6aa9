import React from 'react';


export default class HeroItem extends React.Component {
  render() {
    return (
      <di>
        <dt>{this.props.label}</dt>
        <dd className={this.props.slug}>{this.props.value}</dd>
      </di>
    );
  }
}
