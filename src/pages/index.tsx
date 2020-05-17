import React from 'react';

import Logo from 'components/Logo';
import SocialLink from 'components/SocialLink';

import styles from './index.module.scss';

const IndexPage = () => {
  return (
    <>
      <Logo className={styles.margin} />
      <SocialLink className={styles.margin} />
    </>
  );
};

export default IndexPage;
