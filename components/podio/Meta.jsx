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
      {label: 'Team', slug: 'team', value: this.getTeam()},
      {label: 'Roadmap', slug: 'Roadmap', value: this.props.item['Roadmap Status'] || false},
      {label: 'Phase', slug: 'phase', value: this.getPhase()},
      {label: 'Priority', slug: 'priority', value: this.props.item['Priority'] || false},
      {label: 'T-Shirt', slug: 'tshirt', value: this.props.item['T-shirt'] || false},
      {label: 'Target Launch', slug: 'launch', value: this.props.item['Target Launch_end'] || false},
    ];
  }

  metaItems() {
    let metaItems = [];
    this.metaMapping().forEach((metaItem, index) => {
      if (metaItem.value) {
        metaItems.push(<MetaItem key={index} label={metaItem.label} slug={metaItem.slug} value={metaItem.value}/>);
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
