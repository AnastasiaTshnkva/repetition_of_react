export const getPagesCount = (totalCount, limit) => {
  const pages = Math.ceil(totalCount/limit);
  return pages;
}