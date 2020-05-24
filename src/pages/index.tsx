import React from 'react';
import { NextPage } from 'next';

import Logo from 'components/Logo';
import SocialLink from 'components/SocialLink';

import styles from './index.module.scss';

const IndexPage: NextPage = () => {
  return (
    <>
      <Logo className={styles.margin} />
      <SocialLink className={styles.margin} />
    </>
  );
};

export default IndexPage;
