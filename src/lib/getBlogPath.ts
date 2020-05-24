import moment from 'moment';

export type GetBlogPathArgs = {
  date: string;
  slug: string;
};

export const defaultBlogPath = '/blog/[yyyy]/[mm]/[dd]/[slug]';

export function getBlogPath ({ date, slug }: GetBlogPathArgs) {
  const created = moment(date).format('YYYY/MM/DD');
  return {
    href: defaultBlogPath,
    as: `/blog/${created}/${slug}`,
  };
}

export default getBlogPath;
