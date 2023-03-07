export function cn(...classNames) {
  return classNames
    .map((item) => {
      if (item instanceof Object) {
        return Object.keys(item).filter((key) => Boolean(item[key]));
      }
      return item;
    })
    .flat()
    .filter(Boolean)
    .join(" ");
}
