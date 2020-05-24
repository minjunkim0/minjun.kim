import React from 'react';
import cx from 'classnames';
import Link from 'next/link';

import styles from './Logo.module.scss';

export type Props = {
  className?: string;
  link?: boolean;
};

const Logo = ({ className, link = false }: Props) => {
  const title = <>minjun<span>.</span>kim</>;
  return (
    <h1 className={cx(styles.logo, className)}>
      {link ? (
        <Link href="/"><a>{title}</a></Link>
      ) : title}
    </h1>
  );
};

export default Logo;
