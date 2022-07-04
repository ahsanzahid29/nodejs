let a=10;
let b=20;
let waitingData= new Promise((resolve,any)=>{
    setTimeout(()=>{
        resolve(30)
    },2000)
})
waitingData.then((data)=>{
    console.log(a+data);

})




