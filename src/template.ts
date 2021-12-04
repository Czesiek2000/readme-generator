import { title } from "./title";
import writeToFile from "./write";
import * as inst from "./instalation";
import { config } from "./config";
import { Preview } from "./Classes/Preview";
import * as validation from "./validate";
import { Output } from "./Interfaces/Output";
import { legend } from "./legend";
import { Table } from "./Interfaces/Table";

export function create(output : Output) : void {
    let template = '';

    template += title(output.name, output.name_uppercase, output.centered);
    
    template += `\n${output.description}\n<br/>\n<br/>`

    if (!output.image === null) {
        template += `${output.image?.imageCreate()}`
    }

    template += "\n" + badges(output.badges, output.github_user);
    
    let toc : Table = {
        included: output.legend,
        prerequisite: output.prerequires,
        technologies: output.technologies.length,
        instalation: output.install !== null,
        author: output.author.length !== 0,
        contributors: output.contributors.length,
        contributing: output.contributing,
        previews: output.previews?.length,
        licence: output.licence.length !== 0,
    }
    
    template += "\n" + legend(toc);

    template += "\n" + technologies(output.technologies, output.list_type);
    
    template += "\n" + inst.instalation(output.install, output.packageManager)
    
    template += "\n" + author(output.author)
    
    template += "\n" + contributors(output.contributors, output.list_type)
    
    template += "\n" + previews(output.previews || []);

    template += "\n" + licence(output.licence, output.author, output.github_user);

    template += "\n" + footer(output.footer);

    writeToFile(validation.directory(output.path), config.OUT_FILE, template, output.emojis);
    
}

export function author(text : string) : string {
    let template = ''
    
    if (text.length !== 0) {
        template += `\n## Author\n`
        
        template += `\nAuthor of this project: ${text}\n`;
        
    }else {
        template += `\n## Author\n`
        
        template += `\nAuthor of this project: ${validation.validateAuthor()}\n`;
    }
        
    return template;
}

export function contributors(contributors : string[], type : string) : string {
    let template = '';
    if (contributors.length !== 0) {
        
        template += '## Contributors\n\n';
        
        if (type === config.LIST_TYPES[0]) {
            
            contributors.forEach((contributor : string, index : number) => {
                template += `${index + 1}. ${contributor}\n`
             + 1});
            
        }else {

            contributors.forEach(contributor => {
                template += `* ${contributor}\n`
            });
        }
    
    }

    return template;
}

export function licence(licence : string, author : string, github_user : string) : string {
    return `## Licence\n\nThis project is under **${licence}** licence. All rights reserved ${new Date().getFullYear()} - now, © ${author} [${author}](https://github.com/${github_user})\n`
}

export function footer(include : boolean) : string {
    let template = '';
    if (include) {
        template += `\n<br />\n<hr/>\n<br />\n\n*This README was generated with [readme-generator](https://github.com/Czesiek2000/readme-generator)*\n\n`
    }

    return template;
}

export function previews(previews : Preview[]) : string {
    let template = '';
    if (previews.length !== 0) {
        
        template += '\n## Previews\n';
        
        previews.forEach((preview : Preview) => {
            template += `${preview.previewImage()}\n\n`
        });
    }
    
    return template;
}

export function badges(badges:string[], author : string) : string {
    let template = '\n\n';

    badges.forEach(badge => {
        if (badge === 'Licence') {
            template += `![Licence - ${badge}](https://img.shields.io/badge/license-MIT-green)\n`
        }else if (badge === 'Contributors') {
            template += `![Contributors bage](https://img.shields.io/badge/contributors)\n`
        }else if (badge === 'Version') {
            template += `![Version](https://img.shields.io/badge/version-${config.VERSION}-blue)\n`
        }else if (badge === 'Forks') {
            template += `![Forks](https://img.shields.io/badge/forks-yellow)\n`
        }else if (badge === 'Discord'){
            template += `![Discord](https://img.shields.io/badge/chat-23%20online-informational)\n`
            
        }else {
            template += `![Size](https://img.shields.io/github/directory-file-count/${author}/${config.DEFAULT_NAME}?style=plastic)\n`

        }
    });

    return template;
}

export function technologies(tech : string[], type : string) : string {
    let template = '\n## Technologies\n';

    if (type === config.LIST_TYPES[0]) {
        
        tech.forEach((t : any, index : number) => {
            template += `${index + 1}. ${t}\n`
        });
    }else {
        tech.forEach((t : any) => {
            template += `* ${t}\n`
        });

    }

    return template;
}