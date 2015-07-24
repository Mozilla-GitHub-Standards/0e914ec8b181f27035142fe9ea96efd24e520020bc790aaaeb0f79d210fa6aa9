import React from 'react';


export default class ProgressItem extends React.Component {
  getStyle() {
    return {
      width: this.props.value + '%'
    }
  }

  render() {
    return (
      <di>
        <dt>{this.props.label}</dt>
        <dd className={this.props.slug}>
          <span className="progress" style={this.getStyle()}>{this.props.value}%</span>
        </dd>
      </di>
    );
  }
}
