const {MongoClient , ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
	if(err){
		return console.log('Unable to Connect with MongoDB Server');
	}
	console.log('Connected Successfully');

	const db = client.db('TodoApp');
    
    db.collection('Users').findOneAndUpdate({
        _id : new ObjectID('5e6f859132af9410dc979dc6')
    }, {
        $set :{
            location : 'Mumbai'
        },
        $inc :{
            age : 1
        }
    }, {
        returnOriginal : false
    }).then((result) => {
        console.log(result);
    });

	//client.close();
}); 