import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

import GoogleTagManager, { GoogleTagManagerNoScript } from 'components/GoogleTagManager';

const gtmContainerId: string = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID;

class MyDocument extends Document {
  static async getInitialProps (ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render () {
    return (
      <Html>
        <GoogleTagManager containerId={gtmContainerId} />
        <Head />
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
