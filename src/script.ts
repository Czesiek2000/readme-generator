// const inquirer = require('inquirer')
import * as inquirer from "inquirer";

import { prompt } from './prompts';
import { create } from "./template";
import { Preview } from "./Classes/Preview";
import { Output } from './Interfaces/Output'
import { Logger } from './Classes/Logger';

export function parseCommaSeparated(input: string): string[] {
    if (!input || input.trim().length === 0) {
        return [];
    }
    return input.split(',').map(val => val.trim());
}

export function parseImage(input: string): Preview | undefined {
    if (!input || input.trim().length === 0) {
        return undefined;
    }
    const imageValues = parseCommaSeparated(input);
    if (imageValues.length === 3) {
        return new Preview(imageValues[0], imageValues[2], parseInt(imageValues[1]));
    }
    Logger.log("Cannot create image, pass exactly 3 arguments (source, width, alt)");
    return undefined;
}

// clear console
Logger.clear();

// display and handle prompts
inquirer.prompt(prompt)
.then ((answer : any) => {
    if (!answer._confirm) {
        console.log('Something failed');
        return;
    }

    const image = parseImage(answer.image);
    if (image) {
        image.display();
    }
    
    let previews : Preview[] = [];
    const pr = parseCommaSeparated(answer.previews);
    pr.forEach((p : string, index: number) => {
        previews.push(new Preview(p, `image${index}`));
    });

    let output : Output = {
        name: answer.project_name,
        name_uppercase: answer.name_uppercase,
        centered: answer.name_center,
        description: answer.description,
        legend: answer.legend,
        author: answer.author,
        github_user: answer.github_user,
        contributors: parseCommaSeparated(answer.contributors),
        contributing: answer.contributing,
        licence: answer.licence,
        prerequires: answer.prerequires,
        install: answer.install,
        image,
        technologies: parseCommaSeparated(answer.technologies),
        packageManager: answer.packageManager,
        list_type: answer.list_types,
        badges: answer.badges,
        previews,
        footer: answer.footer,
        path: answer.path,
        emojis: answer.emojis
    }

    create(output);
   
}).catch((error: any) => {
    Logger.error("An error occurred during prompts: " + error.message);
});
