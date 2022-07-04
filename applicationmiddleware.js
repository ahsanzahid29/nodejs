const express= require('express')
const app=express();
//application middleware
const requestFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send(`<h1 style="color:red">Age Not Provided</h1>`)
    }
    else if(req.query.age<18){
        res.send(`<h1 style="color:red">Age must be greater than 18</h1>`)
    }
    else{
        next();
    }
}
app.use(requestFilter)


app.get('/home',(req,res)=>{
    res.send('This is Home Page')
})
app.get('/about',(req,res)=>{
    res.send('This is About Page')
})
app.listen(5000);