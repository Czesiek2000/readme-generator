import { Languages } from "./Enums/Languages";

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
                    template += runReact(true, npm_yarn)
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

export function runReact(boilerplate : boolean, npm_yarn: string) : string {
    let template = '';

    if (boilerplate) {
        template += '\nThis project was made with [React.js](https://reactjs.org) and bootstraped with [Create React App](https://)'
    }

    if (npm_yarn == 'npm') {
        
        
        template += '```sh\n'
        template += `# install dependencies\n$ npm install\n`
        template += '```\n'
        
        template += '```sh\n'
        template += `# run local development server(default 3000)$ npm start\n`
        template += '```\n'
        
        template += '```sh\n'
        template += `# build for production and launch server\n$ npm run build\n$ npm run start\n`
        template += '```\n'
        
        template += '```sh\n'
        template += `# generate static project\n$ npm run generate\n`
        template += '```\n'
        
    }else {
        
        template += '```sh\n'
        template += `# install dependencies\n$ yarn install\n`
        template += '```\n'
        
        template += '```sh\n'
        template += `# run local development server(default 3000)$ yarn start\n`
        template += '```\n'
        
        template += '```sh\n'
        template += `# build for production and launch server\n$ yarn run build\n$ yarn run start\n`
        template += '```\n'
        
        template += '```sh\n'
        template += `# generate static project\n$ yarn run generate\n`
        template += '```\n'
        
    }
        
    return template;
}

export function runNext(boilerplate : boolean, npm_yarn: string) : string {
    let template = '';
    if (boilerplate) {
        template += '\nThis project was made with [Next.js](https://nextjs.org) and bootstrapped with [Create Next App](https://nextjs.org/docs/api-reference/create-next-app)'
        
    }

    template += '```sh\n'
    template += `# install dependencies\n$ npm install\n`
    template += '```\n'

    template += '```sh\n'
    template += `# run local development server(default 8080)$ npm run dev\n`
    template += '```\n'

    template += '```sh\n'
    template += `# build for production and launch server\n$ npm run build\n$ npm run start\n`
    template += '```\n'

    template += '```sh\n'
    template += `# generate static project\n$ npm run generate\n`
    template += '```\n'

    return template;

}

export function runNuxt(boilerplate : boolean, npm_yarn: string) : string {
    let template = '';

    if (boilerplate) {
        
        template += '\nThis project was with [Nuxtjs](https://nuxtjs.org) and bootstrapped with [Create nuxt App](https://www.npmjs.com/package/create-nuxt-app)\n';
    }

    
    template += '```sh\n'
    template += `# install dependencies\n$ npm install\n`
    template += '```\n'

    template += '```sh\n'
    template += `# run local development server(default 8080)$ npm run dev\n`
    template += '```\n'

    template += '```sh\n'
    template += `# build for production and launch server\n$ npm run build\n$ npm run start\n`
    template += '```\n'

    template += '```sh\n'
    template += `# generate static project\n$ npm run generate\n`
    template += '```\n'

    return template;
}

export function runGatsby(boilerplate : boolean, npm_yarn: string) : string {
    let template = '';

    if (boilerplate) {
        template += ''
    }

    return template;
}

export function runCpp(boilerplate : boolean) : string {
    let template = '';

    return template;
}

export function runJava(boilerplate : boolean) : string {
    let template = '';

    return template;
}

export function runCsharp(boilerplate : boolean) : string {
    let template = '';

    return template;
}
