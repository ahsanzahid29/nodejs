const express=require('express');
const requestPath=require('./middleware')
const app= express();

app.get('/home',(req,res)=>{
    res.send('This is Home Page')
});
app.get('/age',requestPath,(req,res)=>{
    res.send('My age is: '+req.query.age)
});
app.listen(5000);
