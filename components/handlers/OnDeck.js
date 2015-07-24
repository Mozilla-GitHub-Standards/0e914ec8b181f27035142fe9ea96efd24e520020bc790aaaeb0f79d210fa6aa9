import connectToStores from 'fluxible-addons-react/connectToStores';
import React from 'react';

import OnDeckStore from '../../stores/OnDeckStore';

import OnDeckItem from '../podio/OnDeckItem';


@connectToStores([OnDeckStore], (context, props) => ({
  onDeckItems: context.getStore(OnDeckStore).getAll()
}))

class OnDeck extends React.Component {
  getOnDeckItem (item, index) {
    return <OnDeckItem key={item.id} index={index} item={item}/>;
  }

  getOnDeckItems () {
    return this.props.onDeckItems.map(this.getOnDeckItem);
  }

  render() {
    return <section>{this.getOnDeckItems()}</section>;
  }
}

OnDeck.propTypes = {
  onDeckItems: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default OnDeck;
