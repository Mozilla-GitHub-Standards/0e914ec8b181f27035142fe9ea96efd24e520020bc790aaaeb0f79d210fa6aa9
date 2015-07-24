import React from 'react';

import ProgressItem from './ProgressItem';


export default class Progress extends React.Component {
  progressItemMapping() {
    return [
      {label: 'Define', slug: 'define', value: this.props.item['Define'] || false},
      {label: 'Design', slug: 'design', value: this.props.item['Design'] || false},
      {label: 'Code', slug: 'code', value: this.props.item['Build'] || false},
      {label: 'Test', slug: 'test', value: this.props.item['Test'] || false},
    ];
  }

  progressItems() {
    let progressItems = [];
    this.progressItemMapping().forEach((progressItem, index) => {
      if (progressItem.value) {
        progressItems.push(<ProgressItem key={index} label={progressItem.label} slug={progressItem.slug} value={progressItem.value}/>);
      }
    });
    return progressItems;
  }

  render() {
    let progressItems = this.progressItems();
    if (progressItems.length == 0) { return false; }
    return (
      <section className="progress">
        <h3>Progress</h3>
        <dl>
          {progressItems}
        </dl>
      </section>        
    );
  }
}
