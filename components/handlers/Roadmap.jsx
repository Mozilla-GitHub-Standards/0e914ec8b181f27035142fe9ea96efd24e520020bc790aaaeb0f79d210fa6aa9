import connectToStores from 'fluxible-addons-react/connectToStores';
import React from 'react';

import RoadmapStore from '../../stores/RoadmapStore';

import RoadmapItem from '../podio/RoadmapItem';
import RoadmapSort from '../podio/RoadmapSort';


@connectToStores([RoadmapStore], (context, props) => {
  let store = context.getStore(RoadmapStore);
  return {
    onDeckItems: store.getAll(),
    activeSort: store.getSort(),
  }
})

class Roadmap extends React.Component {
  getRoadmapItem (item, index) {
    return <RoadmapItem key={item.id} index={index} item={item}/>;
  }

  getRoadmapItems () {
    return this.props.onDeckItems.map(this.getRoadmapItem);
  }

  render () {
    return (
      <section>
        <RoadmapSort activeSort={this.props.activeSort}/>
        {this.getRoadmapItems()}
      </section>
    );
  }
}

Roadmap.propTypes = {
  onDeckItems: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default Roadmap;
