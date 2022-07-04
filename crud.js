const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'crud')
const filePath=`${dirPath}/ahsan.txt`;
//------------ write file-------------------
//fs.writeFileSync(filePath,'This is ahsan file for crud');
//------------ read file--------------------
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item)
// })
//------------- update file----------------
// fs.appendFile(filePath,' and I have added some more data here',(err)=>{
//     if(!err) console.log('File is updated')
// })
//-------------- rename file----------------
// fs.rename(filePath,`${dirPath}/hassan.txt`,(err)=>{
//     if(!err) console.log('File name has been changed')
// })
//--------------- remove file---------------
fs.unlinkSync(`${dirPath}/hassan.txt`)