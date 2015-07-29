import React from 'react';


export default class BlockText extends React.Component {
  getText () {
    return {__html: this.props.value}
  }

  render() {
    let text = this.getText();
    if (!text.__html) { return false; }
    return (
      <section className="blockotext">
        <h3>{this.props.label}</h3>
        <div dangerouslySetInnerHTML={text} />
      </section>
    );
  }
}
