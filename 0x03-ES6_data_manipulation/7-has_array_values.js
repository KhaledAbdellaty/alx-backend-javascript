export default function hasValuesFromArray(set, arr) {
  return arr.map((x) => set.has(x)).reduce((x, v) => (!!v), false);
}
