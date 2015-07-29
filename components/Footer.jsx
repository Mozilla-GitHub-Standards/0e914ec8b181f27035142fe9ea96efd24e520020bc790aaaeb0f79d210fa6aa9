import React from 'react';


export default class Footer extends React.Component {
  render() {
    if (this.props.hide) { return false; }
    return (
      <footer>
        <p>Source on <a href="https://github.com/chuckharmston/jugband-react/">Github</a>.</p>
      </footer>
    );
  }
}
