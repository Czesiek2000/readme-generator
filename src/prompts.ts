const pkg = require('../package.json');
import { Licence } from './Enums/Licence';
import { isValid, projectName } from './validate';
import { config } from "./config";
import { Languages } from './Enums/Languages';
import { captitalize } from "./helper";

export const prompt = [
    {
        name: 'project_name',
        type: 'prompt',
        message: "What's your project name?",
        default: projectName
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
        name: "legend",
        type: 'confirm',
        message: 'Should legend be included?'
    },
    {
        name: "author",
        type: 'input',
        message: 'Who is autor of this project?',
        validate: isValid
    },
    {
        name: "github_user",
        type: 'input',
        message: 'Github username?',
        validate: isValid
    },
    {
        name: "contributors",
        type: 'input',
        message: 'Give contributors'
    },
    {
        name: "contributing",
        type: 'input',
        message: 'Give contributing instruction or leave empty to skip it'
    },
    {
        name: "licence",
        type: 'list',
        message: 'What is licence of your project?',
        choices: captitalize(Licence),
        default: config.DEFAULT_LICENCE,
        validate: isValid
    },
    {
        name: 'prerequires',
        type: 'input',
        message: 'Type prerequisite for this project',
    },
    {
        name: "install",
        type: 'checkbox',
        message: 'Choose languages that needs to be installed (check git if you want to provide project clone with git)',
        choices: captitalize(Languages),
    },
    {
        name: "image",
        type: 'input',
        message: 'Include image?(if yes type path to image,alt,width (only number) - (separate with [,]))',
    },
    {
        name: 'technologies',
        type: 'input',
        message: 'Include technologies that is used in your project(separate with [,])',
        validate: isValid
    },
    {
        name: 'npm_yarn',
        type: 'checkbox',
        message: 'Do you use npm or yarn or both?',
        validate: isValid,
        choices: config.MANAGER,
        default: 'npm'
    },
    {
        name: "list_types",
        type: 'list',
        choices: config.LIST_TYPES,
        default: config.LIST_TYPES[1]
    },
    {
        name: "badges",
        type: "checkbox",
        message: "What badges include",
        choices: config.BADGES,
    },
    {
        name: 'previews',
        type: 'input',
        message: 'Give path to preview image / images (seperate with [,])'
    },
    {
        name: 'footer',
        type: 'confirm',
        message: 'Include footer?',
        default: config.GENERATE_FOOTER
    },
    {
        name: 'path',
        type: 'input',
        message: 'Where you want to create README file?'
    },
    {
        name: 'emojis',
        type: 'confirm',
        message: 'Include emojis in README?',
        default: config.EMOJIS
    },
    {
        name: "_confirm",
        type: 'confirm',
        message: 'Do you want to create README?'
    }
]