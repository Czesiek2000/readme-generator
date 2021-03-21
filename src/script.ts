const inquirer = require('inquirer')

import { prompt } from './prompts';
import { create } from "./template";

// clear console
console.clear();

// display and handle prompts
inquirer.prompt(prompt)
.then ((answer : any) => {
    if (!answer._confirm) {
        console.log('Something failed')
        
    }
    
    let output = {
        name: answer.project_name,
        name_uppercase: answer.name_uppercase,
        centered: answer.name_center,
        description: answer.description,
    }

    create(output);
   
})
