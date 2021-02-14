import React from 'react';

import Header from 'containers/Header';
import Footer from 'components/Footer';

import styles from './Layout.module.scss';

export type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
