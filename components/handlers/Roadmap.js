import connectToStores from 'fluxible-addons-react/connectToStores';
import React from 'react';

import RoadmapStore from '../../stores/RoadmapStore';

import RoadmapItem from '../RoadmapItem';


@connectToStores([RoadmapStore], (context, props) => ({
  onDeckItems: context.getStore(RoadmapStore).getAll()
}))
class Roadmap extends React.Component {
  getRoadmapItem (item, index) {
    return <RoadmapItem key={item.id} index={index} item={item}/>;
  }

  getRoadmapItems () {
    return this.props.onDeckItems.map(this.getRoadmapItem);
  }

  render() {
    return <section>{this.getRoadmapItems()}</section>;
  }
}

Roadmap.propTypes = {
  onDeckItems: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default Roadmap;
