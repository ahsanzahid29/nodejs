const express=require('express')
const path=require('path')

const app=express()
const publicPath=path.join(__dirname,'public');

app.set('view engine','ejs');

app.get('/profile',(req,res)=>{
    const data={
        'name':'Ahsan Zahid',
        'email':'ahsan@test.com',
        'city':'Islamabad'
    };
    res.render('profile',{data})
})
app.get('/about',(req,res)=>{
    
    res.render('about',)
})
app.listen(5000);