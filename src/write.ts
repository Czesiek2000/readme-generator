const fs = require('fs');
import { config } from "./config";

export default function writeToFile(directory : string, file: string, text : string) : void {

    let outDir = directory.length === 0 ? config.OUT_DIR : directory;
    let outFile = file.length === 0 ? config.OUT_FILE : file;
    
    fs.writeFile(`${outDir}/${outFile}`, text, (err : any) => {
        if (err) {
            console.log(err);
           
        }

    
    });

    
}
