import classNames from 'classnames';
import React from 'react';

import setActiveRoadmap from '../../actions/setActiveRoadmap';

import BlockText from './BlockText';
import Meta from './Meta';
import Links from './Links';


export default class RoadmapItem extends React.Component {
  static contextTypes = {
    executeAction: React.PropTypes.func
  };

  getClassNames () {
    return classNames([
      this.props.item.Status.toLowerCase(),
      this.props.isActive ? 'active' : 'inactive'
    ]);
  }

  setAsActive () {
    this.context.executeAction(setActiveRoadmap, this.props.item.id);
  }

  render () {
    return (
      <article className={this.getClassNames()} onClick={this.setAsActive.bind(this)}>
        <h2>
          <span className="index">{this.props.index + 1}</span>
          {this.props.item.name}
        </h2>
        <Meta {...this.props}/>
        <Links {...this.props}/>
        <BlockText label="Next Steps" value={this.props.item['Next Step']}/>
      </article>
    );
  }
}
