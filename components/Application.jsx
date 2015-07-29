import {connectToStores, provideContext} from 'fluxible-addons-react';
import {handleHistory} from 'fluxible-router';
import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Throbber from './Throbber';

import ApplicationStore from '../stores/ApplicationStore';


let updateApplication = (context) => ({
  store: context.getStore(ApplicationStore).getState()
});

@provideContext
@handleHistory({enableScroll: false})
@connectToStores([ApplicationStore], updateApplication)
export default class Application extends React.Component {
  static contextTypes = {
    getStore: React.PropTypes.func,
    executeAction: React.PropTypes.func
  };

  constructor(props, context) {
    super(props, context);
  }

  componentDidUpdate(prevProps) {
    document.title = this.props.store.pageTitle;
  }

  render() {
    var Handler = this.props.currentRoute.get('handler');
    return (
      <div>
        <Header/>
        <Throbber showThrobber={this.props.store.pageIsLoading}/>
        <main>
          <Handler/>
        </main>
        <Footer hide={this.props.store.pageIsLoading}/>
      </div>
    );
  }
}
