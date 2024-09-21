import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import GoogleTagManager, { GoogleTagManagerNoScript } from 'components/GoogleTagManager';

const gtmContainerId: string = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID;

const storageKey = 'theme';
const noFlash = `(function() {
function setDataThemeAttribute(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

function getPreferredTheme() {
  var theme = null;
  try {
    theme = localStorage.getItem('${storageKey}');
  } catch (err) {}
  return theme;
}

var lightQuery = window.matchMedia('(prefers-color-scheme: light)');
var preferredTheme = getPreferredTheme();
if (preferredTheme !== null) {
  setDataThemeAttribute(preferredTheme);
} else if (lightQuery.matches) {
  setDataThemeAttribute('light');
}
})();`.replace(/(\s{2}|\n)/g, '');

class MyDocument extends Document {
  // static async getInitialProps (ctx: DocumentContext) {
  //   const initialProps = await Document.getInitialProps(ctx);
  //   return { ...initialProps };
  // }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <script dangerouslySetInnerHTML={{ __html: noFlash }} />
          <GoogleTagManager containerId={gtmContainerId} />
        </Head>
        <body>
          <Main />
          <NextScript />
          <GoogleTagManagerNoScript containerId={gtmContainerId} />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
