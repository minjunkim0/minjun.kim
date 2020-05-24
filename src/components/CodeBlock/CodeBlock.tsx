import React from 'react';
import cx from 'classnames';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import prismTheme from 'prism-react-renderer/themes/vsDark';

import styles from './CodeBlock.module.scss';

export type Props = {
  lang?: Language;
  children: string[];
};

export const CodeBlock = ({ children, lang }: Props) => {
  if (typeof lang === 'undefined') {
    return <code>{children}</code>;
  }

  const code = children.join('\n');
  return (
    <Highlight
      {...defaultProps}
      code={code}
      language={lang}
      theme={prismTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          data-language={lang}
          className={cx(styles.container, className)}
          style={style}
        >
          <div className={styles.code}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </div>
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
