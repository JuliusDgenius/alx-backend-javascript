export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw Error('Position outside of range');
  }
  const buffer = new ArrayBuffer(length);
  const dataView = new Int8Array(buffer, 0, length);
  dataView.set([value], position);

  return new DataView(buffer);
}
