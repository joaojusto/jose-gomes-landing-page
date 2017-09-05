import React from 'react';
import Helmet from 'react-helmet';
import Headroom from 'react-headroom';

class Admin extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Content Manager</title>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
            rel="stylesheet"
            type="text/css"
          />
          <link rel="stylesheet" href="/admin/cms.css" />
        </Helmet>
        <div>
          <script src="/admin/cms.js" />
        </div>
      </div>
    );
  }
}

export default Admin;
