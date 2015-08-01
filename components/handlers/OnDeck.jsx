import connectToStores from 'fluxible-addons-react/connectToStores';
import React from 'react';

import OnDeckStore from '../../stores/OnDeckStore';

import OnDeckItem from '../podio/OnDeckItem';


@connectToStores([OnDeckStore], (context, props) => {
  let store = context.getStore(OnDeckStore);
  return {
    onDeckItems: store.getAll(),
    activeOnDeckItem: store.getActiveOnDeckItem()
  };
})

class OnDeck extends React.Component {
  getOnDeckItem (item, index) {
    let isActive = this.props.activeOnDeckItem == item.id;
    return <OnDeckItem isActive={isActive} key={item.id} index={index} item={item}/>;
  }

  getOnDeckItems () {
    return this.props.onDeckItems.map(this.getOnDeckItem.bind(this));
  }

  render() {
    return <section>{this.getOnDeckItems()}</section>;
  }
}

OnDeck.propTypes = {
  onDeckItems: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default OnDeck;
