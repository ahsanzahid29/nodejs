const express=require('express');
const dbConnect=require('./connectdb');
const mongoDb= require('mongodb');

const app= express();

app.use(express.json());

app.get('/getallproducts',async(req,res)=>{
  let data = await dbConnect();
  data= await data.find().toArray();
  //console.log(data);
  res.send(data);

})
app.post('/addproduct', async(req,res)=>{
let data = await dbConnect();
let result= await data.insertOne(req.body);
if(result.acknowledged){
  res.send("Record Inserted");
}
else{
  res.send('Record not Inseted')
}
})
app.put('/updateproduct/:name',async(req,res)=>{
  let data= await dbConnect();
  let result= await data.updateOne(
    {name: req.params.name},
    {$set: req.body}
  )
  if(result.acknowledged){
    if(result.modifiedCount==1){
      res.send("Record Updated")
    }
    else{
      res.send('Nothing to update');
    }
  }
  else{
    res.send('Something went wrong')
  }
  //res.send(result);

})
app.delete('/deleteproduct/:id',async(req,res)=>{
  let data = await dbConnect();
  let result =  await data.deleteOne({_id: new mongoDb.ObjectId(req.params.id)})
  if(result.acknowledged){
    if(result.deletedCount==1){
      res.send('Record Deleted');
    }
    else{
      res.send('Record cannot be Deleted');
    }
  }
  else{
    res.send('Something went wrong');

  }

})
app.listen(5000);
