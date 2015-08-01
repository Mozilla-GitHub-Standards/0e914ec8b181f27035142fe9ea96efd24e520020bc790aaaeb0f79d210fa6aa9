import connectToStores from 'fluxible-addons-react/connectToStores';
import React from 'react';

import ActivityStore from '../../stores/ActivityStore';

import ActivityItem from '../podio/ActivityItem';


@connectToStores([ActivityStore], (context, props) => {
  let store = context.getStore(ActivityStore);
  return {
    activityItems: store.getAll(),
    activeActivityItem: store.getActiveActivityItem()
  };
})

class Activity extends React.Component {
  getActivityItem (item, index) {
    let isActive = this.props.activeActivityItem == item.id;
    return <ActivityItem isActive={isActive} key={item.id} index={index} item={item}/>;
  }

  getActivityItems () {
    return this.props.activityItems.map(this.getActivityItem.bind(this));
  }

  render() {
    return <section>{this.getActivityItems()}</section>;
  }
}

Activity.propTypes = {
  activityItems: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default Activity;
