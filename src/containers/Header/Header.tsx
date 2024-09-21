'use client';

import React from 'react';
import Link from 'next/link';

import AdjustIcon from '@/components/icons/AdjustIcon';
import GithubIcon from '@/components/icons/GithubIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import LinkedinIcon from '@/components/icons/LinkedinIcon';
import Wrapper from '@/components/Wrapper';
import Symbol from '@/components/UnderfrontSymbol';
import TopHeading from '@/components/TopHeading';

import styles from './Header.module.scss';

function handleSwitchTheme() {
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
  return (
    <header>
      <Wrapper className={styles.container}>
        <TopHeading>
          <Link href="/">
            <Symbol height="30" className={styles.logo} />
          </Link>
        </TopHeading>
        <div className={styles.utils}>
          <button
            type="button"
            className={styles.mode}
            onClick={handleSwitchTheme}
          >
            <AdjustIcon className={styles.icon} />
          </button>
          <a
            href="https://www.linkedin.com/in/minjunk"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={styles.mode}
          >
            <LinkedinIcon className={styles.icon} />
          </a>
          <a
            href="https://instagram.com/3600s"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={styles.mode}
          >
            <InstagramIcon className={styles.icon} />
          </a>
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
