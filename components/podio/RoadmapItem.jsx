import React from 'react';

import BlockText from './BlockText';
import Meta from './Meta';
import Links from './Links';


export default class RoadmapItem extends React.Component {
  getRoadmapClass ()  {
    return this.props.item['Status'].toLowerCase();
  }

  render () {
    return (
      <article className={this.getRoadmapClass()}>
        <h2>
          <span className="index">{this.props.index + 1}</span>
          {this.props.item['name']}
        </h2>
        <Meta {...this.props}/>
        <Links {...this.props}/>
        <BlockText label="Next Steps" value={this.props.item['Next Step']}/>
      </article>
    );
  }
}
