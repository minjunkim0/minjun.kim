import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Cookies from 'universal-cookie';

import './_app.scss';

type Props = AppProps & {
  cookies: Cookies;
};

const App = ({ Component, pageProps }: Props) => {
  useEffect(() => {
    const cookies = new Cookies();
    const theme = cookies.get('_theme');
    if (typeof document !== 'undefined' && typeof theme !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, []);

  return (
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
};

export default App;
