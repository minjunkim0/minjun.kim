import React from 'react';
import cheerio from 'cheerio';
import Prism from 'prismjs';

import styles from './WPContent.module.scss';

export type Props = {
  value: string | undefined;
  className?: string;
};

export const WPContent = ({ value }: Props) => {
  let content = value;
  if (typeof value !== 'undefined') {
    const $ = cheerio.load(value);
    $('code[lang]').each((_, code) => {
      const { lang } = code.attribs;
      if (typeof lang !== 'undefined' && typeof Prism.languages[lang] !== 'undefined') {
        const html = Prism.highlight(code.children[0].data, Prism.languages[lang], lang);
        $(code).html(html).parent().attr('data-lang', lang);
      }
    });

    content = $.html('body > *');
  }

  return (
    <div
      className={styles.content}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default WPContent;
