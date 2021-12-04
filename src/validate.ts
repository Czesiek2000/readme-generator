// const os = require('os');
const pkg = require('../package.json')
import os from 'os';
import path from 'path';
import { config } from './config';

export function isValid(input : string) : boolean | string {
    if (input.length === 0) {
        return "This value is required"
    }

    return true
}

export function validateAuthor() : any {
    return pkg.author.length === 0 ? os.userInfo().username : pkg.author
}

export function defaultDescription () : string {
    return `This is default README description of ${pkg.name} project. This text should be replaced with your brief project description text.`
}

export function directory(path : string) : string {
    return path.length === 0 ? config.OUT_DIR : path
}

export function includeEmojis(include : boolean) {
    return include !== undefined ? config.EMOJIS : include
}

export function projectName() : string {
    return pkg.name !== undefined ? pkg.name : path.dirname(__filename).split(path.sep).pop()
}

export function imageValid(paramsNumber : string) : boolean | string {
    let params = paramsNumber.split(',');
    params.forEach(p => p.trim());
    if (params.length !== 3) {
        return "Image must have specified 3 arguments: source, alt, width"
    }

    return true;
}