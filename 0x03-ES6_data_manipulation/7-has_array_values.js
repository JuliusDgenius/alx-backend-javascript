export default function hasValuesFromArray(set, array) {
  for (const item of array) {
    return set.has(item);
  }
  return false;
}
