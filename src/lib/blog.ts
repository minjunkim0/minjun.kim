
import fs from 'node:fs'
import { join } from 'node:path';

import fg from 'fast-glob'
import matter from "gray-matter";

import type { Post } from '@/types/post';

const postsDirectory = join(process.cwd(), '_posts');

function getSlug(slug: string | string[]): string {
  if (Array.isArray(slug)) {
    return slug.join('/');
  }
  return slug;
}

export function getPostSlugs() {
  return fg.sync('**/*.md', { cwd: postsDirectory,
    onlyFiles: true,
    ignore: ['README.md']
   });
}

export function getPostBySlug(slug: string | string[]) {
  const realSlug =   getSlug(slug).replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content, excerpt } = matter(fileContents);
  return { ...data, slug: realSlug.split('/'), excerpt, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
  return posts;
}
