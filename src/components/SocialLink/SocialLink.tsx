import React from 'react';
import cx from 'classnames';

import styles from './SocialLink.module.scss';

export type Props = {
  className?: string;
};

export const SocialLink = ({ className }: Props) => (
  <ul className={cx(styles.links, className)}>
    <li><a href="https://www.linkedin.com/in/minjunk">Linkedin</a></li>
    <li><a href="https://instagram.com/3600s">Instagram</a></li>
    <li><a href="mailto:hi@minjun.kim">Mail to<span>hi@minjun.kim</span></a></li>
  </ul>
);

export default SocialLink;
