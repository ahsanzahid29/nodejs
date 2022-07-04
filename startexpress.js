const express = require('express')
const app=express();
app.get('',(req,res)=>{
    res.send('Hello. This is home Page')
});
app.get('/about',(req,res)=>{
    res.send('Hello. This is about page')
});
app.get('/help',(req,res)=>{
    res.send('Hello. This is help page');
})
app.get('/user',(req,res)=>{
    console.log('Entered values are :', req.query);
    res.send('Hello This is: '+req.query.name+ ' and my area of expertise is: '+req.query.field)
})
app.get('/displayhtml',(req,res)=>{
    res.send(`
    <h1> This is Heading</h1>
    <a href="/displayinput">Input Page</a>
    `)
})
app.get('/displayinput',(req,res)=>{
    res.send(`
    <input type="text" placeholder="Enter Name" value="${req.query.name}" />
    <button type="button">Click Me</button>
    <a href="/displayhtml">Html Page</a>
 `)
})
app.get('/jsonresponse',(req,res)=>{
    res.send([
        {
        'name':'ahsan zahid',
        'email':'ahsanzahid29@hotmail.com'
        },
        {
            'name':'hassan shirazi',
            'email':'syed_hassanshirazi@yahoo.com'
        }
] )
})
app.listen(5000);