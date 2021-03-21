import { Emojis } from "../Enums/Emojis";

export class Logger {
    static log(text : string) : void {
        console.log(text);
    }

    static error (text : string) : void {
        console.log(`${Emojis.EXCLAMATION} ${text}`);
    }

    static clear() : void {
        console.clear();
    }
}