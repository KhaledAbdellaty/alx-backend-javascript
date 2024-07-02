export default function cleanSet(set, string) {
  if (typeof set !== 'object') return '';
  if (typeof string !== 'string') return '';
  if (string.length === 0) return '';

  const stringSet = [];
  [...set].forEach((x) => {
    if (x && x.indexOf(string) === 0) stringSet.push(x.replace(string, ''));
  });
  return stringSet.join('-');
}
