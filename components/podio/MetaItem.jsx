import React from 'react';


export default class MetaItem extends React.Component {
  render() {
    return <di><dt>{this.props.label}</dt><dd>{this.props.value}</dd></di>;
  }
}
