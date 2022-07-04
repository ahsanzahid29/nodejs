const express=require('express');
const app=express();

const requestFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send('Please provide age');
    }
    else{
        next();
    }
};
//app.use(requestFilter);


app.get('/home',(req,res)=>{
    res.send('This is Home Page')
});

app.get('/about',(req,res)=>{
    res.send('This is about Page')
});
app.get('/age',requestFilter,(req,res)=>{
    let age= req.query.age;
    res.send('My age is:' +age)
});

app.listen(5000);

