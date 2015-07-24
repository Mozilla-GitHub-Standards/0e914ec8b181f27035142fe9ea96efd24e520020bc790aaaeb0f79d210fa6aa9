import React from 'react';

import BlockText from './BlockText';
import Heroes from './Heroes';
import Meta from './Meta';
import Links from './Links';
import Progress from './Progress';


export default class ActivityItem extends React.Component {
  getActivityClass ()  {
    return this.props.item['Status'].toLowerCase();
  }
  render () {
    return (
      <article className={this.getActivityClass()}>
        <h2>
          <span className="index">{this.props.index + 1}</span>
          {this.props.item['name']}
        </h2>
        <Meta {...this.props}/>
        <Links {...this.props}/>
        <Heroes {...this.props}/>
        <Progress {...this.props}/>
        <BlockText label="Next Steps" value={this.props.item['Next Step']}/>
      </article>
    );
  }
}
