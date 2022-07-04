const express=require('express')
const app=express();

app.set('view engine','ejs');

app.get('/test',(
    req,res)=>{
    const data={
        name:"Ahsan Zahid",
        email:"ahsanzahid29@hotmail.com",
        technology:['PHP CodeIgniter','Node JS','Vue JS','Laravel','Python']
    }
    res.render('details.ejs',{data});

})
app.listen(5000);