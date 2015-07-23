import React from 'react';

import ProgressItem from './ProgressItem';


export default class Progress extends React.Component {
  render() {
    return (
      <section className="progress">
        <h3>Progress</h3>
        <dl>
          <ProgressItem name="Define" percentage={100} />
          <ProgressItem name="Design" percentage={100} />
          <ProgressItem name="Build" percentage={55} />
          <ProgressItem name="Test" percentage={10} />
        </dl>
      </section>
    );
  }
}
