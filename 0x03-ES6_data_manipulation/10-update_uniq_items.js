export default function updateUniqueItems(obj) {
  if (!(obj instanceof Map)) throw Error('Cannot process');
  obj.forEach((x, y) => {
    if (x === 1) obj.set(y, 100);
  });

  return obj;
}
