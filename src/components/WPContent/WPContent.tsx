import React from 'react';
import cx from 'classnames';
import { VFile } from 'vfile';
import rehype from 'rehype';
import rehype2react from 'rehype-react';
import minifyWhitespace from 'rehype-minify-whitespace';
import CodeBlock from '../CodeBlock';

import styles from './WPContent.module.scss';

type ContentVFile = VFile & {
  result: JSX.Element;
};

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

export const WPContent = ({ value, className }: Props) => {
  return (
    <div className={cx(styles.content, className)}>
      {(processor.processSync(value) as ContentVFile).result}
    </div>
  );
};

export default React.memo(WPContent);
