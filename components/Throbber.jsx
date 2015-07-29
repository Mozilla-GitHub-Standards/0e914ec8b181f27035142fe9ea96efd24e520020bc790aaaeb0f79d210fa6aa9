import classNames from 'classnames';
import React from 'react';

import ApplicationStore from '../stores/ApplicationStore';


export default class Throbber extends React.Component {
  getClassNames() {
    return [
      'throbber',
      {
        'throbber-visible': this.props.showThrobber
      }
    ];
  }

  render() {
    return (
      <div className={classNames(this.getClassNames())}>
        <p><span>Loading&hellip;</span></p>
      </div>
    );
  }
}
