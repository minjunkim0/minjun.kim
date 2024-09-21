import React from 'react';
import Link from 'next/link';

import TopHeading from '@/components/TopHeading';
import type{ Props as TopHeadingProps} from '@/components/TopHeading';

export type Props =  TopHeadingProps;

const Logo = (props: Props) => {
  return (
    <TopHeading {...props}>
      <Link href="/">
        minjun<span>.</span>kim
      </Link>
    </TopHeading>
  );
};

export default Logo;
