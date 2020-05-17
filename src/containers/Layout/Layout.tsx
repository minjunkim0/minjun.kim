import React from 'react';

import Header from 'containers/Header';

import styles from './Layout.module.scss';

export type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        {children}
      </div>
    </>
  );
};

export default Layout;
