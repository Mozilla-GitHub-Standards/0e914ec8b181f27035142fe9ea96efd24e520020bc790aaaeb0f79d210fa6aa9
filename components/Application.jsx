import {connectToStores, provideContext} from 'fluxible-addons-react';
import {handleHistory} from 'fluxible-router';
import React from 'react';

import Header from './Header';
import Footer from './Footer';

import ApplicationStore from '../stores/ApplicationStore';


@provideContext
@handleHistory({enableScroll: false})
@connectToStores([ApplicationStore], (context) => ({
  ApplicationStore: context.getStore(ApplicationStore).getState()
}))
export default class Application extends React.Component {
  static contextTypes = {
    getStore: React.PropTypes.func,
    executeAction: React.PropTypes.func
  };

  constructor(props, context) {
    super(props, context);
  }

  componentDidUpdate(prevProps) {
    let newProps = this.props;
    if (newProps.ApplicationStore.pageTitle === prevProps.ApplicationStore.pageTitle) {
      return;
    }
    document.title = newProps.ApplicationStore.pageTitle;
  }

  render() {
    var Handler = this.props.currentRoute.get('handler');
    return (
      <div>
        <Header/>
        <main>
          <Handler/>
        </main>
        <Footer/>
      </div>
    );
  }
}
