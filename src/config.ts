const os = require('os');
const pkg = require('../package.json')
import { defaultDescription, validateAuthor } from "./validate";

export const config = {
    OUT_DIR: 'test',
    OUT_FILE: 'README.md',
    DEFAULT_NAME: pkg.name,
    DEFAULT_LICENCE: 'MIT',
    DEFAULT_AUTHOR: validateAuthor(),
    REPOSITORY: pkg.repository,
    RUN_SCRIPTS: pkg.scripts,
    GENERATOR_FOOTER: true,
    DEFAULT_DESCRIPTION: defaultDescription(),
    VERSION: '1.0.0',
    LIST_TYPES: ['Ordered list', 'Unordered list'],
    BADGES: ["Licence", "Contributors", "Version", "Forks", "Size", "Discord"],
    MANAGER: ['npm', 'yearn'],
}

