const dbConnect = require('./connectdb');

const insert= async ()=>{
    let db = await dbConnect();
    //*********** Single Insert********************************************* */
    // const result= await db.insertOne(
    //     {name:'PS-4',brand:'Sony',price:45000.25,category:'Play Station'}
    //     );
    //*********** Multiple Insert********************************************* */
    const result= await db.insertMany([
        {name:'latitude 1',brand:'DELL',price:500.25,category:'Laptop'},
        {name:'latitude 2',brand:'DELL',price:600.70,category:'Laptop'},
        {name:'latitude 3',brand:'DELL',price:700.26,category:'Laptop'},

    ]
    );
        if(result.acknowledged){
            console.log('Record Inserted');
        }

}
insert();