import { remark } from "remark";
import html from "remark-html";
import prism from "remark-prism";
import rehype2react from "rehype-react";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(html)
    .use(rehype2react, {
      createElement: React.createElement,
      components: {
        code: CodeBlock,
      },
    })
    .process(markdown);
  return result.toString();
}
