import { Preview } from "../Classes/Preview";
import { Languages } from "../Enums/Languages";
import { Licence } from "../Enums/Licence";

export interface Output {
    name: string;
    name_uppercase: string;
    centered: boolean;
    description: string;
    legend: boolean;
    author: string;
    github_user: string;
    contributors: string[];
    contributing: string,
    licence: Licence;
    prerequires: boolean;
    install: Languages;
    image?: Preview;
    technologies: string[];
    npm_yarn: string;
    list_type: string;
    badges: string[];
    previews?: Preview[];
    footer: boolean;
    path: string;
    emojis: boolean
}