const {MongoClient , ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
	if(err){
		return console.log('Unable to Connect with MongoDB Server');
	}
	console.log('Connected Successfully');

	const db = client.db('TodoApp');
    
    //deleteOne
    //db.collection('Todos').deleteOne({text : 'Eat lunch'}).then((result)=>{
    //	console.log(result);
    //});
    
    //deleteMany
    db.collection('Todos').deleteMany({text : 'Eat lunch'}).then((result) => {
    	console.log(result);
    });

    //findOneAndDelete
    db.collection('Users').findOneAndDelete({_id : new ObjectID('5e6f57dc785a1f09c062c621')}).then((result) => {
    	console.log(JSON.stringify(result , undefined , 2));
    });


	//client.close();
}); 