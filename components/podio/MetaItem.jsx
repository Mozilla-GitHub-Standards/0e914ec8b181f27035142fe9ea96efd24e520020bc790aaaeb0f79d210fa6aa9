import React from 'react';


export default class MetaItem extends React.Component {
  render() {
    return (
      <di className={this.props.slug}>
        <dt>{this.props.label}</dt>
        <dd>{this.props.value}</dd>
      </di>
    );
  }
}
