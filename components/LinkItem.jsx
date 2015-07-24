import React from 'react';


export default class LinkItem extends React.Component {
  render() {
    return <li><a href="{this.props.href}" target="_blank">{this.props.label}</a></li>;
  }
}
