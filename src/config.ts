const pkg = require('../package.json')
const os = require('os');
import { validateAuthor } from "./validate";

export const config = {
    OUT_DIR: 'test',
    OUT_FILE: 'README.md',
    DEFAULT_NAME: pkg.name,
    DEFAULT_LICENCE: 'MIT',
    REPOSITORY: pkg.repository,
    RUN_SCRIPTS: pkg.scripts,
    GENERATE_FOOTER: true,
    VERSION: '1.0.0',
    LIST_TYPES: ['Ordered list', 'Unordered list'],
    BADGES: ["Licence", "Contributors", "Version", "Forks", "Size", "Discord"],
    MANAGER: ['npm', 'yearn'],
    EMOJIS: false,
    COPYWRITE: `Copywrite (c) ${new Date().getFullYear()}, ${''}`
}
