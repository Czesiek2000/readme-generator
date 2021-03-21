const pkg = require('../package.json');
import { isValid } from './validate';

export const prompt = [
    {
        name: 'project_name',
        type: 'prompt',
        message: "What's your project name?",
        default: pkg.name
    },
    {
        name: 'name_uppercase',
        type: 'list',
        message: "Should project name be uppercase?",
        choices: ["Uppercase", "Lowercase", "Custom"]
    },
    {
        name: 'name_center',
        type: 'confirm',
        message: "Should project name be centered?",
    },
    {
        name: "description",
        type: 'input',
        message: "What's your project description?",
        validate: isValid,
    },
    {
        name: "_confirm",
        type: 'confirm',
        message: 'Do you want to create README?'
    }
]