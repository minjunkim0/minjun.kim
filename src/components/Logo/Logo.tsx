import React from 'react';
import cx from 'classnames';

import styles from './Logo.module.scss';

export type Props = {
  className?: string;
};

const Logo = ({ className }: Props) => {
  return (
    <h1 className={cx(styles.logo, className)}>
      minjun<span>.</span>kim
    </h1>
  );
};

export default Logo;
