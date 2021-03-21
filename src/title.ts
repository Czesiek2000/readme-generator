export function title(title: string, uppercase: string, centered: boolean) {
    let template = ''
    if (uppercase.toLowerCase() === "custom") {
        
        if (!centered) {
            template += `# ${title}`
        }

        template += `<div align="center"><h1>${title}</h1></div>`
    }

    if (uppercase.toLowerCase() === 'uppercase') {
        if (!centered) {
            template += `# ${title.toUpperCase()}\n`
            
        }


        template += `<div align="center"><h1>${title.toUpperCase()}</h1></div>`
    }

    if (uppercase.toLowerCase() === 'uppercase') {
        if (!centered) {
            template += `# ${title.toLowerCase()}\n`
            
        }

        template += `<div align="center"><h1>${title.toLowerCase()}</h1></div>`
    }

    return template;
}