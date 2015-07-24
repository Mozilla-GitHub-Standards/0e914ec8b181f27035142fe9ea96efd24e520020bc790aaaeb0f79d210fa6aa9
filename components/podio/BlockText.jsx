import React from 'react';


export default class BlockText extends React.Component {
  getText () {
    return {__html: this.props.value}
  }

  render() {
    return (
      <section className="blockotext">
        <h3>{this.props.label}</h3>
        <div dangerouslySetInnerHTML={this.getText()} />
      </section>
    );
  }
}
