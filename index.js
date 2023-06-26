const fs= require("fs");
const path=require("path");
require("dotenv/config");



const main=async()=>{
    try{
        let files=fs.readdirSync(process.env.DIR_PATH);
        files.map(async(file)=>{
         const absPath=path.join(process.env.DIR_PATH, file);
         let fileInfo= fs.statSync(absPath);
         let allowedTime=parseInt(fileInfo.mtimeMs)+parseInt((process.env.DELETE_TIME_LINE));
         let currentTime= new Date().getTime();
         if(currentTime>allowedTime){
            fs.unlinkSync(absPath);
            console.log(`${absPath} file is deleted`);
         }
         else{
            console.info("Don;t Delete the file");
         }

        });
    }
    catch(err)
    {
        console.log("in error block");
        console.error(err);

    }
}

main();