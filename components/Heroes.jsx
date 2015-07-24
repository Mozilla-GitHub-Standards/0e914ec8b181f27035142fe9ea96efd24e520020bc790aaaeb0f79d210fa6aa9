import React from 'react';

import HeroItem from './HeroItem';


export default class Heroes extends React.Component {
  heroMapping() {
    return [
      {label: 'Program', slug: 'program', value: this.props.item['team_project'] || false},
      {label: 'Product', slug: 'product', value: this.props.item['team_product'] || false},
      {label: 'UX/Design', slug: 'uxd', value: this.props.item['team_design'] || false},
      {label: 'Development', slug: 'engineering', value: this.props.item['team_developers'] || false},
    ];
  }

  heroes() {
    let heroes = [];
    this.heroMapping().forEach((hero, index) => {
      if (hero.value) {
        heroes.push(<HeroItem key={index} label={hero.label} slug={hero.slug} value={hero.value}/>);
      }
    });
    return heroes;
  }

  render() {
    let heroes = this.heroes();
    if (heroes.length == 0) { return false; }
    return (
      <section className="heroes">
        <h3>Heroes</h3>
        <dl>
          {heroes}
        </dl>
      </section>        
    );
  }
}
