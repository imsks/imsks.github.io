import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { ServerStyleSheet } from 'styled-components';
import { Helmet } from 'react-helmet';
import Routes from '../client/Routes';
import webConfig from '../../webConfig.json';

export default (req, context) => {
  // 1. Created instance for Sheet
  const sheet = new ServerStyleSheet();

  const content = renderToString(
    sheet.collectStyles(
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    )
  );

  const helmet = Helmet.renderStatic();

  // 2. Get styles from content
  const styles = sheet.getStyleTags();

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="UTF-8">
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="UTF-8">
        <meta name="robots" content="index, follow" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta
        name="googlebot"
        content="index, follow, max-snippet:-1, max-image-preview:large"
        />
        <meta
          name="bingbot"
          content="index, follow, max-snippet:-1, max-image-preview:large"
        />
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <meta property="og:site_name" content="Sachin Kr. Shukla" />
        <meta property="og:type" content="portfolio" />
        <meta property="og:url" content="sachinshukla.me" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@i_skrs" />
        <meta name="twitter:title" content="Sachin Kr. Shukla" />
        <meta
          name="twitter:description"
          content="Connect with me on twitter @i_skrs"
        />
        <meta name="twitter:creator" content="@i_skrs" />
        ${styles}
        <link rel="shortcut icon" href="${webConfig.siteURL}/assets/images/favicon.png">
        <link rel="stylesheet" href="${webConfig.siteURL}/assets/css/styles.min.css">
        </head>
            <body>
                <div id="root">${content}</div>
                <script src="/bundle.js"></script>
            </body>
    </html>`;
};
