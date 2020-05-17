import React from 'react';

import Wrapper from 'components/Wrapper';
import Logo from 'components/Logo';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <Wrapper className={styles.container}>
        <Logo />
      </Wrapper>
    </header>
  );
};

export default Header;
