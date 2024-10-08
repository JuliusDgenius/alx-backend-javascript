export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);

  if (position >= length || position < 0) {
    throw new Error('Position outside of range');
  }
  const dataView = new DataView(buffer);
  dataView.setInt8(position, value);
  return dataView;
}
