export default function appendToEachArrayValue(array, appendString) {
  const yep = [];
  for (const x of array) {
    yep.push(appendString + x);
  }

  return yep;
}
