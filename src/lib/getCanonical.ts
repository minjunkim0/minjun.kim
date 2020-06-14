export function getCanonical (path: string) {
  const url = new URL(path, process.env.HOMEPAGE);
  return url.toString();
}

export default getCanonical;
