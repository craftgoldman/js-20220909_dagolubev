/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size = undefined) {

    if (size === undefined) return string;

    let result = '';
    
    let count = 0;

    for (const s of string) {

        if (result.endsWith(s)) {
            count++;
        }
        else {
            count = 1;
        }

        if (count <= size) {
            result += s;
        }

    }

    return result;

}
