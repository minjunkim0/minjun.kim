import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import 'prismjs/themes/prism-dark.css';
import './_app.css';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta charSet="utf-8" key="meta-charset" />
      <meta name="viewport" content="width=device-width,initial-scale=1" key="meta-viewport" />
      <title>minjun.kim</title>
      <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
