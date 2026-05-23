
// asynchornous call backs
/* function callback(){
    console.log("Hi there");
}
*/

// setTimeout(callback,5*1000);

// let cnt=0;
/* for (let i=0;i<1000;i++){
    cnt++;
 } */


// console.log(cnt);

/*function setTimeoutPromisified(delay){
    return new Promise(function(resolve,revoke){
        setTimeout(resolve, delay);
    })
}

setTimeoutPromisified(6000).then(()=>{
    console.log("Hi Hello");
})

*/

 const fs=require('fs');
const { readFile } = require('fs/promises');

/*const content = fs.readFileSync("a.txt","utf-8")
const trimedcontent = content.trim()
fs.writeFileSync("a.txt",trimedcontent);

*/



/*
fs.readFile("a.txt","utf-8",function(err,data){
    if(err){
        console.log("error while updating the file");
    }
    else{
        trimedContent=data.trim();
        fs.writeFile("a.txt" ,trimedContent,()=>{
            console.log("content is trimed out.");
        } );

    }
    
})

*/


function cleanFile(path){
    return new Promise(function(resolve, reject){
        fs.readFile(path,"utf-8",function(err,content){
            if (err){
                reject(err);
            }
            else{
                trimedContent= content.trim();
                fs.writeFile(path,trimedContent,function(err){
                    if(err){
                        reject(err);
                    }
                    else{
                        resolve();
                    }
                })
            }
        })
    })

}

/*
cleanFile("a.txt")
.then(()=>{
    console.log("content is trimed out");
}).catch((err)=>{
    console.log("err in finding the file",err);
})

*/

/*
async function main(path) {
    try{
        await cleanFile(path);
        console.log("file is trimed out");
    }catch(error){
        console.log("error while updating the file",error);
    }
}

main("a.txt");

*/

async function cleanManyFiles(prefix){
    try{
    await cleanFile(`${prefix}1.txt`);
    await cleanFile(`${prefix}2.txt`);
    await cleanFile(`${prefix}3.txt`);
    console.log("All files are trimed out.")
    }catch(err){
        console.log("error while triming the files",err);
    }
}

cleanManyFiles("a");





