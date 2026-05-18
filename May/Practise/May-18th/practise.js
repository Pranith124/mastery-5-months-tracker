const fs = require('fs');


setTimeout(()=>{ contents = fs.readFileSync("../May-17th/index.js","utf-8");

console.log(contents)}
,1000)

for(let i=0;i<100;i++){
    console.log(i);
    console.log("------------------------------");
}


