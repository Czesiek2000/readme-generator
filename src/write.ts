const fs = require('fs');
import { Logger } from "./Classes/Logger";
import { config } from "./config";
import { Emojis } from "./Enums/Emojis";
import { includeEmojis } from "./validate";

export default function writeToFile(directory : string, file: string, text : string, emoji : boolean) : void {

    let outDir = directory.length === 0 ? config.OUT_DIR : directory;
    let outFile = file.length === 0 ? config.OUT_FILE : file;
    
    fs.writeFile(`${outDir}/${outFile}`, text, (err : any) => {
        if (err) {
            console.log(err);
           Logger.error(`${includeEmojis(emoji) ? Emojis.CROSS : ''}`)
        }

        Logger.log(`${includeEmojis(emoji) ? Emojis.TADA : ''} Successfully create README file in ${includeEmojis(emoji) ? Emojis.FOLDER : ''}${outDir}/${outFile}`)
    
    });

    
}
