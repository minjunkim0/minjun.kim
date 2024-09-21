import React from 'react';
import { NextPage } from 'next';

import Logo from 'components/UnderfrontLogo';
import TopHeading from 'components/TopHeading';
import SocialLink from 'components/SocialLink';

import styles from './index.module.scss';

const IndexPage: NextPage = () => {
  return (
    <>
      <TopHeading className={styles.margin}>
        <Logo width="100" />
      </TopHeading>
      <SocialLink className={styles.margin} />
    </>
  );
};

export default IndexPage;
