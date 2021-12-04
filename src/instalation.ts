import { Languages } from "./Enums/Languages";
import { packageManagerTemplate } from "./helper";

const pkg = require('../package.json')

export function instalation(install: Languages, npm_yarn : string) : string {
    let template = '';
    
    let installValues : string[] = Object.keys(install) || [];

    if (installValues.length !== 0) {
        
        template += `\n## Instalation\n\n`
        
        installValues.forEach((inst : string) => {
            switch (inst.toLowerCase()) {
                case 'git':
                    template += git();
                    
                case 'vue':
                    template += runVue(true, npm_yarn);
                    break;
                
                case 'react':
                    template += installTemplate('react', 'https://reactjs.org', npm_yarn, true, 3000, 'vue-cli', 'start');
                    break;
                default:
                    break;
            }
        });
    }
   
    return template;
}

export function git() : string {
    let template = '';

    template += '**Note: You need to have git installed on your computer to work with this project**\n\nIf you don\'t have git installed on your computer you can get it from [official](https://git-scm.com) webiste'
    template += '\n\nClone repository with git\n\n'
    template += '```sh\n'
    template += `git clone ${pkg.repository.url.slice(4, pkg.repository.url.length)}\n`
    template += '```\n'
    template += `\nOr you can download zip folder from [repo](${pkg.repository.url.slice(4, pkg.repository.url.length)}), then unzip it and open in your favourite code editor.\n\nNow you can install dependencies and start working on the project.`

    return template;
}

export function installTemplate(tech:string, docsLink: string, packageManager: string, boilerplate: boolean, port: number, cli: string, runCommand: string) : string {
    let template = '\n';
    if(boilerplate){
        template += `This project was made with [${tech}](${docsLink}) and generated with ${cli}`;
    }else {
        template += `This project was made with [${tech}](${docsLink})`
    }

    template += packageManagerTemplate(packageManager, port, runCommand);
    
    return template;
}

export function runVue(boilerplate: boolean, manager : string) : string {
    let template = '\n';

    if (boilerplate) {
        template += 'This project was made with [Vuejs](https://vuejs.org) and generated with vue-cli';
    }else {
        template += 'This project was made with [Vuejs](https://vuejs.org)';
    }

    if (manager === 'npm') {
        
        template += '```sh\n'
        template += `# install dependencies\n$ npm install\n`
        template += '```\n'
        
        template += '```sh\n'
        template += `# run local development server(default 8080)\n$ npm run serve\n`
        template += '```\n'
        
        template += '```sh\n'
        template += `# build for production and launch server\n$ npm run build\n$ npm run start\n`
        template += '```\n'
        
        template += '```sh\n'
        template += `# generate static project\n$ npm run generate\n`
        template += '```\n'

    }else if (manager === 'yarn') {
    
        template += '```sh\n'
        template += `# install dependencies\n$ yarn install\n`
        template += '```\n'
        
        template += '```sh\n'
        template += `# run local development server(default 8080)$ yarn serve\n`
        template += '```\n'
        
        template += '```sh\n'
        template += `# build for production and launch server\n$ yarn build\n$ yarn start\n`
        template += '```\n'
        
        template += '```sh\n'
        template += `# generate static project\n$ yarn generate\n`
        template += '```\n'
        
    }else {
        
        template += `\n### NPM installation\n`
        template += '```sh\n'
        template += `# install dependencies\n$ npm install\n`
        template += '```\n'
        
        template += '```sh\n'
        template += `# run local development server(default 8080)$ npm serve\n`
        template += '```\n'
        
        template += '```sh\n'
        template += `# build for production and launch server\n$ npm build\n$ npm start\n`
        template += '```\n'
        
        template += '```sh\n'
        template += `# generate static project\n$ npm generate\n`
        template += '```\n'


        template += `\n### Yarn installation\n`
        template += '```sh\n'
        template += `# install dependencies\n$ yarn install\n`
        template += '```\n'
        
        template += '```sh\n'
        template += `# run local development server(default 8080)$ yarn serve\n`
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
