let arr =[10,20,15,60]
//console.log(arr);
let result=arr.filter((item)=>{
    //console.log(item); //traverse all elements in array
    return item>10;
});
console.log(result);