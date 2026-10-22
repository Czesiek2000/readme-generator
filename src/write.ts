const fs = require('fs');
const path = require('path');
import { Logger } from "./Classes/Logger";
import { config } from "./config";
import { Emojis } from "./Enums/Emojis";
import { includeEmojis } from "./validate";
import { folderExist } from "./helper";

export default function writeToFile(directory : string, file: string, text : string, emoji : boolean) : void {

    let outDir = directory.length === 0 ? config.OUT_DIR : directory;
    let outFile = file.length === 0 ? config.OUT_FILE : file;
    
    folderExist(outDir);

    fs.writeFile(path.join(outDir, outFile), text, (err : any) => {
        if (err) {
            console.log(err);
            Logger.error(`${includeEmojis(emoji) ? Emojis.CROSS : ''} Failed to create README file.`);
            return;
        }

        Logger.log(`${includeEmojis(emoji) ? Emojis.TADA : ''} Successfully create README file in ${includeEmojis(emoji) ? Emojis.FOLDER : ''}${path.join(outDir, outFile)}`)
    });
}
