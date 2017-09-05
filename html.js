import React from 'react';
import Helmet from 'react-helmet';

import { prefixLink } from 'gatsby-helpers';

const BUILD_TIME = new Date().getTime();

const HTML = ({ body }) => {
  const head = Helmet.renderStatic();

  let css;
  if (process.env.NODE_ENV === 'production')
    css = (
      <style
        dangerouslySetInnerHTML={{
          __html: require('!raw!./public/styles.css')
        }}
      />
    );

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {css}
        {head.link.toComponent()}
        <link
          href="https://fonts.googleapis.com/css?family=Bree+Serif|Hammersmith+One"
          rel="stylesheet"
        />
      </head>
      <body>
        <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }} />
        <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
      </body>
    </html>
  );
};

export default HTML;
