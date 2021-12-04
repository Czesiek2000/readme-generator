// const pkg = require('../package.json')
// const os = require('os');
import * as pkg from '../package.json';
import * as os from 'os';
import * as fs from 'fs';
import { config } from './config';

export function captitalize(values : any) : string[] {
    let result : string[] = [];

    Object.keys(values).forEach((v : string) => {
        let val = values[v];
        result.push(val.charAt(0).toUpperCase() + val.slice(1))
    });


    return result
}

export function folderExist(folder:string = config.DEFAULT_DIST_FOLDER) {
    // if (!folder) {
    //     folder = config.DEFAULT_TEST_FOLDER;
    // }

    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
        console.log(`Folder ${folder} was successfully created`);
    }
}

export function packageManagerTemplate(packageManager:string, port : number, runCommand: string) : string {
    let template = '';
    if (packageManager === 'npm') {
        template += template += '```sh\n'
        template += `# install dependencies\n$ npm install\n`
        template += '```\n'

        template += '```sh\n'
        template += `# run local development server(default ${port})\n$ npm run ${runCommand}\n`
        template += '```\n'

        template += '```sh\n'
        template += `# build for production and launch server\n$ npm run build\n$ npm run start\n`
        template += '```\n'
        
        template += '```sh\n'
        template += `# generate static project\n$ npm run generate\n`
        template += '```\n'
    }
    
    if (packageManager == 'yarn') {
        template += '```sh\n'
        template += `# install dependencies\n$ yarn install\n`
        template += '```\n'
        
        template += '```sh\n'
        template += `# run local development server(default ${port})\n$ ${runCommand}\n`
        template += '```\n'
        
        template += '```sh\n'
        template += `# build for production and launch server\n$ yarn build\n$ yarn start\n`
        template += '```\n'
        
        template += '```sh\n'
        template += `# generate static project\n$ yarn generate\n`
        template += '```\n'
    }

    return template;
}