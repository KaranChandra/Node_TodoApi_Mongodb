const MongoClient = require('mongodb').MongoClient;


//destructuring example
var user = { name : 'karan' , age : 21};
var {name} = user;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
	if(err){
		return console.log('Unable to Connect with MongoDB Server');
	}
	console.log('Connected Successfully');

	const db = client.db('TodoApp');

	/*db.collection('Todos').insertOne({
		text: 'Something to do',
		completed : false
	}, (err , result) =>{
		if(err){
			return console.log('Unable to insert todo');
		}
		console.log(JSON.stringify(result.ops , undefined , 2));
	});*/

	db.collection('Users').insertOne({
		name : 'Raj',
		age : 15,
		location : 'Mumbai'
	}, (err , result) =>{
		if(err){
			return console.log('Unable to insert user');
		}
		console.log(result.ops);
	});

	client.close();
}); 