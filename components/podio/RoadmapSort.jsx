import React from 'react';

import RoadmapSortItem from '../podio/RoadmapSortItem';


export default class RoadmapSort extends React.Component {
  sortMapping () {
    return [
      {slug: 'default', label: 'New'},
      {slug: 'status', label: 'Active'},
      {slug: 'date', label: 'Launch Date'},
    ];
  }

  sortItems() {
    let sortItems = [];
    this.sortMapping().forEach((item, index) => {
      sortItems.push(<RoadmapSortItem key={index} label={item.label} slug={item.slug} isActive={item.slug === this.props.activeSort}/>);
    });
    return sortItems;
  }

  render () {
    return (
      <section className="sort">
        <p>Sort by:</p>
        <ul>
          {this.sortItems()}
        </ul>
      </section>
    );
  }
}
