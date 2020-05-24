import React, { useCallback } from 'react';
import Cookies from 'universal-cookie';

import AdjustIcon from 'components/AdjustIcon';
import Wrapper from 'components/Wrapper';
import Logo from 'components/Logo';

import styles from './Header.module.scss';

const cookies = new Cookies();

export const Header = () => {
  const handleSwitchTheme = useCallback(() => {
    if (typeof document === 'undefined') {
      return;
    }

    const html = document.documentElement;
    const theme = html.getAttribute('data-theme');
    const switchTheme = theme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', switchTheme);

    const expires = new Date();
    expires.setDate(120);
    cookies.set('_theme', switchTheme, { expires, path: '/' });
  }, []);

  return (
    <header>
      <Wrapper className={styles.container}>
        <Logo link className={styles.logo} />
        <div className={styles.utils}>
          <button
            type="button"
            className={styles.mode}
            onClick={handleSwitchTheme}
          >
            <AdjustIcon className={styles.icon} />
          </button>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
