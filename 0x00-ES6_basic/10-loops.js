export default function appendToEachArrayValue(array, appendString) {
  const yep = [];
  for (let x of array) {
    yep.push(appendString + x);
  }

  return yep;
}
