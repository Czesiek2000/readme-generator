const os = require('os');
const pkg = require('../package.json')

export function isValid(input : string) : boolean | string {
    if (input.length === 0) {
        return "This value is required"
    }
    return true
}


export function validateAuthor() : string{
    return pkg.author.length === 0 ? os.userInfo().username : pkg.author
}

export function defaultDescription () {
    return `This is default README description of ${pkg.name} project. This text should be replaced with your brief project description text.`
}