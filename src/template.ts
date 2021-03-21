const pkg = require('../package.json');
import { title } from "./title";
import writeToFile from "./write";

export function create(output : any) : void {
    let template = '';

    template += title(output.name, output.name_uppercase, output.centered);
    
    template += `\n${output.description}\n<br/>\n<br/>`
    
    writeToFile('test', 'README.md', template);
    
}

