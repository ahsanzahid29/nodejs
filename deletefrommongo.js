const dbConnect = require('./connectdb');

const deleteData=async ()=>{
    let data= await dbConnect();
    let result=await data.deleteMany({name:'Latitude2'});
    if(result.acknowledged){
        if(result.deletedCount!=0){
            console.log('Record Deleted');
        }else{
            console.log('Nothing to delete');
        }
    }
}
deleteData();