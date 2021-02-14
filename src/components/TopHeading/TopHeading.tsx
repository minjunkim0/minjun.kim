import React from 'react';
import cx from 'classnames';

import styles from './TopHeading.module.scss';

export type Props = {
  className?: string;
  children?: React.ReactNode;
};

const TopHeading = ({ className, children }: Props) => {
  return (
    <h1 className={cx(styles.logo, className)}>
      {children}
    </h1>
  );
};

export default TopHeading;
