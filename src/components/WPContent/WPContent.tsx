import React from 'react';
import rehype from 'rehype';
import rehype2react from 'rehype-react';
import minifyWhitespace from 'rehype-minify-whitespace';
import CodeBlock from '../CodeBlock';

import styles from './WPContent.module.scss';

const processor = rehype()
  .data('settings', { fragment: true })
  .use(minifyWhitespace)
  .use(rehype2react, {
    createElement: React.createElement,
    components: {
      code: CodeBlock,
    },
  });

export type Props = {
  value: string | undefined;
  className?: string;
};

export const WPContent = ({ value }: Props) => {
  return (
    <div className={styles.content}>
      {processor.processSync(value).result}
    </div>
  );
};

export default React.memo(WPContent);
