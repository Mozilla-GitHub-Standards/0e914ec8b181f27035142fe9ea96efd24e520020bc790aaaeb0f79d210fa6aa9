import React from 'react';

import LinkItem from './LinkItem';


export default class Links extends React.Component {
  linkMapping() {
    return [
      {label: 'Podio', href: this.props.item['podio_link'] || false},
      {label: 'Stories/PRD', href: this.props.item['Stories / PRD'] || false},
      {label: 'Design Specs', href: this.props.item['Design Specs'] || false},
      {label: 'Build Bugs', href: this.props.item['Build Bugs'] || false},
      {label: 'Test Plan', href: this.props.item['Test Plan'] || false},
      {label: 'Meeting Minutes', href: this.props.item['Meeting Minutes'] || false},
      {label: 'Concept Docs', href: this.props.item['Concept Docs'] || false},
    ];
  }

  links() {
    let items = [];
    this.linkMapping().forEach(link => {
      if (link.href) {
        items.push(<LinkItem key={link.label} label={link.label} href={link.href}/>);
      }
    });
    return items;
  }

  render() {
    let links = this.links();
    if (links.length == 0) { return false; }
    return (
      <section className="links">
        <h3>Links</h3>
        <ul>
          {links}
        </ul>
      </section>        
    );
  }
}
