/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  const copyObject = {};

  if (obj !== undefined) {
    for (let [key, element] of Object.entries(obj)) {
      copyObject[element] = key;
    }
    return copyObject;
  } else {
    return undefined;
  }
}
