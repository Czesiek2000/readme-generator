import { Table } from "./Interfaces/Table";

export function legend(toc : Table) : string {
    let template = '';

    if (toc.included) {
        template += '\n## Table of contents\n\n'
        template += technologies(toc.technologies)
        template += prerequires(toc.prerequisite)
        // installation
        template += include_author(toc.author)
        template += contrib(toc.contributors)
        template += contributing(toc.contributing)
        template += include_licence(toc.licence);
    }

    return template
}

export function technologies(tech : number) : string {
    let template = '';

    if (tech !== 0) {
        template += '* [Technologies](#Technologies)\n'
    }

    return template;
}

export function prerequires(prerequisite: boolean) : string {
    let template = '';
    
    if (prerequisite) {
        template += '* [Prerequisite](#Prerequisite)\n'
    }

    return template;
}

export function include_author(author: boolean) : string {
    let template = '';

    if (author) {
        template += '* [Author](#Author)\n'
    }

    return template;
}

export function contrib(contributors: number) : string {
    let template = '';

    if (contributors !== 0) {
        template += '* [Contributors](#Contributors)\n'
    }

    return template;
}

export function contributing(contribute : string) : string {
    let template = '';
    
    if (contribute.length !== 0) {
        template += '* [Contributing](#Contributing)\n'
    }
    
    return template;
}

export function include_licence(licence: boolean) : string {
    let template = '';

    if (licence) {
        template += '* [Licence](#Licence)\n'
    }

    return template;
}

