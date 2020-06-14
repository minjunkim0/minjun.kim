import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import getCanonical from 'lib/getCanonical';

import './_app.scss';

const App = ({ Component, pageProps, router }: AppProps) => {
  const canonical = getCanonical(router.asPath);
  const title = 'minjun.kim';
  return (
    <>
      <Head>
        <meta charSet="utf-8" key="meta-charset" />
        <meta name="viewport" content="width=device-width,initial-scale=1" key="meta-viewport" />
        <title>{title}</title>
        <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
        <link rel="canonical" href={canonical} key="canonical" />
        <meta property="og:type" content="website" key="og-type" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:site_name" content={title} />
        <meta property="og:url" content={canonical} key="og-url" />
        <meta property="og:title" content={title} key="og-title" />
        <meta property="og:image" content="/og.png" key="og-image" />
        <meta property="og:image:width" content="1200" key="og-image-width" />
        <meta property="og:image:height" content="630" key="og-image-height" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={canonical} key="twitter-url" />
        <meta name="twitter:title" content={title} key="twitter-title" />
        <meta name="twitter:image" content="/og.png" key="twitter-image" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
