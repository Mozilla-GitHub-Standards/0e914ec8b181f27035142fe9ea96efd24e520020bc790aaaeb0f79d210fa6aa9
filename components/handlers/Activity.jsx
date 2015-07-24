import connectToStores from 'fluxible-addons-react/connectToStores';
import React from 'react';

import ActivityStore from '../../stores/ActivityStore';

import ActivityItem from '../podio/ActivityItem';


@connectToStores([ActivityStore], (context, props) => ({
  activityItems: context.getStore(ActivityStore).getAll()
}))

class Activity extends React.Component {
  getActivityItem (item, index) {
    return <ActivityItem key={item.id} index={index} item={item}/>;
  }

  getActivityItems () {
    return this.props.activityItems.map(this.getActivityItem);
  }

  render() {
    return <section>{this.getActivityItems()}</section>;
  }
}

Activity.propTypes = {
  activityItems: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default Activity;
