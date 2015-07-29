import classNames from 'classnames';
import React from 'react';

import changeRoadmapSort from '../../actions/changeRoadmapSort';


export default class RoadmapSortItem extends React.Component {
  static contextTypes = {
    executeAction: React.PropTypes.func,
  };

  getClassNames() {
    return {
      'active': this.props.isActive
    };
  }

  changeSort (newSort) {
    return evt => {
      evt.preventDefault();
      this.context.executeAction(changeRoadmapSort, newSort);
    };
  }

  render () {
    return (
      <li>
        <a href="#" className={classNames(this.getClassNames())}
           onClick={this.changeSort(this.props.slug)}>{this.props.label}</a>
      </li>
    );
  }
}
