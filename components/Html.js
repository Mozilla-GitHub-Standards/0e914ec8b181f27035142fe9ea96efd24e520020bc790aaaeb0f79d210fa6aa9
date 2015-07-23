import React from 'react';

import ApplicationStore from '../stores/ApplicationStore';


export default class HtmlComponent extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <title>{this.props.context.getStore(ApplicationStore).getPageTitle()}</title>
          <link rel="stylesheet" href="/public/jugband.css" />
          <link rel="stylesheet" href="//code.cdn.mozilla.net/fonts/fira.css" />
          <script src="//code.jquery.com/jquery-2.1.4.min.js"></script>
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}} />
        </body>
        <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
        <script src="/public/js/client.js" defer></script>
      </html>
    )
  }
}
