module.exports=(req,res,next)=>{
    if(!req.query.age){
        res.send('Please provide age');
    }
    else{
        next();
    }
};