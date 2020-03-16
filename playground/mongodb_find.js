const {MongoClient , ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
	if(err){
		return console.log('Unable to Connect with MongoDB Server');
	}
	console.log('Connected Successfully');

	const db = client.db('TodoApp');

	/*db.collection('Todos').find({ completed : false }).toArray().then((docs) =>{
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined , 2))
	}, (err) => {
		console.log('Unable to fetch todos' ,err);
	});*/

      
    db.collection('Todos').find().count().then((cnt) =>{
		console.log('Todos count ' , cnt);
	}, (err) => {
		console.log('Unable to fetch todos' ,err);
	});


	//client.close();
}); 