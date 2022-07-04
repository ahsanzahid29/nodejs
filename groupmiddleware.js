const express=require('express');
const requestFilter=require('./middleware')
const route=express.Router()

const app=express();
route.use(requestFilter);

app.get('/home',(req,res)=>{
    res.send('This is Home Page')
});
route.get('/age',requestFilter,(req,res)=>{
    res.send('My age is: '+req.query.age)
});
app.use('/',route)
app.listen(5000);