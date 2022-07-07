const dbConnect = require('./connectdb')

const update = async () => {
    let data = await dbConnect();
    let result = await data.updateMany(
        { name: 'Latitude Two' }, {
        $set: { name: 'Latitude2', price: 660.36 }
    }

    )
    if (result.acknowledged) {
        if (result.modifiedCount != 0) {
            console.log('Record Updated');
        }
        else {
            console.log('Nothing to update');
        }
    }


}
update();