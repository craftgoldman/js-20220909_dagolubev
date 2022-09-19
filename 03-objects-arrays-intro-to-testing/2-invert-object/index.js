/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj = undefined) {

    if (obj == undefined) return undefined;

    let result = {};

    for (let [key, val] of Object.entries(obj)) {
        result[val] = key;
    }

    return result;
}
