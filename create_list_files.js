const fs=require('fs')
const path=require('path')
const dirPth=path.join(__dirname,'files')
console.warn(dirPth);
// for(i=0;i<5;i++){
//     fs.writeFileSync(dirPth+'/hello'+i+'.txt','This is hello file')
//     fs.writeFileSync(dirPth+`/ahsan${i}.txt`,'This is ahsan file') //another way to write in file
// }
// Read files in directory
fs.readdir(dirPth,(err,files)=>{
    console.log(files);
    files.forEach((item)=>{
        console.log(item);
    })
})

