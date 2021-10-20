// const pkg = require('../package.json')
// const os = require('os');
import * as pkg from '../package.json';
import * as os from 'os';

export function captitalize(values : any) : string[] {
    let result : string[] = [];

    Object.keys(values).forEach((v : string) => {
        let val = values[v];
        result.push(val.charAt(0).toUpperCase() + val.slice(1))
    });


    return result
}
