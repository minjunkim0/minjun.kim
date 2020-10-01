import React, { useCallback } from 'react';

import AdjustIcon from 'components/icons/AdjustIcon';
import GithubIcon from 'components/icons/GithubIcon';
import Wrapper from 'components/Wrapper';
import Logo from 'components/Logo';

import styles from './Header.module.scss';

function switchTheme() {
  if (typeof document === 'undefined') {
    return;
  }

  const html = document.documentElement;
  const theme = html.getAttribute('data-theme');
  const setTheme = theme === 'light' ? '' : 'light';

  // setAttribute
  html.setAttribute('data-theme', setTheme);

  // setLocalStorage
  try {
    localStorage.setItem('theme', setTheme);
  } catch (err) {}
}

export const Header = () => {
  const handleSwitchTheme = useCallback(switchTheme, []);

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
          <a
            href="https://github.com/minjunk"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={styles.mode}
          >
            <GithubIcon className={styles.icon} />
          </a>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
