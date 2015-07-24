import React from 'react';

import MetaItem from './MetaItem';


export default class Meta extends React.Component {
  getTeam() {
    if ('Team' in this.props.item) {
      let team = this.props.item['Team'];
      if (Array.isArray(team)) {
        return team.join(', ');
      }
      return team;
    }
    return false;
  }

  getPhase() {
    if ('Phase' in this.props.item && this.props.item['Phase']) {
      return this.props.item['Phase'].substring(3)
    }
    return false;
  }

  metaMapping() {
    return [
      {label: 'Team', value: this.getTeam()},
      {label: 'Phase', value: this.getPhase()},
      {label: 'Priority', value: this.props.item['Priority'] || false},
      {label: 'T-Shirt', value: this.props.item['T-shirt'] || false},
      {label: 'Target Launch', value: this.props.item['Target Launch_end'] || false},
    ];
  }

  metaItems() {
    let metaItems = [];
    this.metaMapping().forEach((metaItem, index) => {
      if (metaItem.value) {
        metaItems.push(<MetaItem key={index} label={metaItem.label} value={metaItem.value}/>);
      }
    });
    return metaItems;
  }

  render() {
    let items = this.metaItems();
    if (items.length == 0) { return false; }
    return (
      <section className="meta">
        <dl>
          {items}
        </dl>
      </section>        
    );
  }
}
