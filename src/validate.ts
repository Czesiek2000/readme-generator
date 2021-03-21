const os = require('os');
const pkg = require('../package.json')

export function isValid(input : string) : boolean | string {
    if (input.length === 0) {
        return "This value is required"
    }
    return true
}
