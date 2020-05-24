import React from 'react';
import Cookies from 'universal-cookie';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

import GoogleTagManager, { GoogleTagManagerNoScript } from 'components/GoogleTagManager';

const gtmContainerId: string = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID;

export type Props = {
  cookies: Cookies;
};

class MyDocument extends Document<Props> {
  static async getInitialProps (ctx: DocumentContext) {
    const cookies = new Cookies(ctx.req?.headers?.cookie);
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, cookies };
  }

  render () {
    const cookies = this.props.cookies;
    const theme = cookies.get('_theme');
    return (
      <Html lang="ko" data-theme={theme}>
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
