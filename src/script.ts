// const inquirer = require('inquirer')
import * as inquirer from "inquirer";

import { prompt } from './prompts';
import { create } from "./template";
import { Preview } from "./Classes/Preview";
import { Output } from './Interfaces/Output'
import { Logger } from './Classes/Logger';

// clear console
Logger.clear();

// display and handle prompts
inquirer.prompt(prompt)
.then ((answer : any) => {
    if (!answer._confirm) {
        console.log('Something failed');
    }

    let image;
    if (answer.image.length > 0) {
        const imageValues : string[] = answer.image.split(',')
        
        if (imageValues.length !== 3) {
            Logger.log("Cannot create image, pass more or less than 3 arguments");
            image = null;
        }

        image = new Preview(imageValues[0], imageValues[2], parseInt(imageValues[1]))
        image.display()
        
    }
    
    let previews : Preview[] = [];
    if (answer.previews.length !== 0) {
        let pr = answer.previews.split(',');

        pr.forEach((p : any, index: number) => {
            previews.push(new Preview(p, `image${index}`))
        });
    }

    let output : Output = {
        name: answer.project_name,
        name_uppercase: answer.name_uppercase,
        centered: answer.name_center,
        description: answer.description,
        legend: answer.legend,
        author: answer.author,
        github_user: answer.github_user,
        contributors: answer.contributors.split(','),
        contributing: answer.contributing,
        licence: answer.licence,
        prerequires: answer.prerequires,
        install: answer.install,
        image,
        technologies: answer.technologies.split(','),
        npm_yarn: answer.npm_yarn,
        list_type: answer.list_types,
        badges: answer.badges,
        previews,
        footer: answer.footer,
        path: answer.path,
        emojis: answer.emojis
    }

    create(output);
   
})
