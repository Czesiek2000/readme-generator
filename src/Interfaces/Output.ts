import { Preview } from "../Classes/Preview";
import { Languages } from "../Enums/Languages";
import { Licence } from "../Enums/Licence";

export interface Output {
    name: string,
    name_uppercase: boolean,
    centered: boolean,
    description: string,
    author: string,
    github_user: string,
    contributors: string[],
    licence: Licence,
    install: Languages,
    image?: Preview,
    technologies: string[],
    npm_yarn: string,
    list_type: string,
    badges: string[],
    previews?: Preview[],
    footer: boolean
}