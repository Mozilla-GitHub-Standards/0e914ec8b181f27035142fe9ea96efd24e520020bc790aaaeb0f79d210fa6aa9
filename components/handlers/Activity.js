import connectToStores from 'fluxible-addons-react/connectToStores';
import React from 'react';

import ActivityStore from '../../stores/ActivityStore';

import ActivityItem from '../ActivityItem';


function getActivityItem(item) {
  return <ActivityItem key={item.id} item={item}/>;
}


@connectToStores([ActivityStore], (context, props) => ({
  activity_items: context.getStore(ActivityStore).getAll()
}))
class Activity extends React.Component {
  render() {
    var activityItems = this.props.activity_items.map(getActivityItem);
    return (
      <section>
        <h2>Activity</h2>
        {activityItems}
      </section>
    );
  }
}

Activity.propTypes = {
  activity_items: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default Activity;

