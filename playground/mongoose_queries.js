const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/model/todo');
const {User} = require('./../server/model/user');

var id = '5e7125d46322c7059c71a1e6';

if(!ObjectID.isValid(id)){
	console.log('Id not valid');
}



//find() method can also use for multiple todos
/*Todo.findOne({ _id : id }).then( (todos) => {
	console.log('Todos' , todos);
});

Todo.findById(id).then( (todo) => {
	if(!todo){
		return console.log('Id not found');
	}
	console.log('Todo by Id' , todo);
});*/

User.findById(id).then( (user) => {
	if(!user){
		return console.log('User not found');
	}
	console.log(JSON.stringify(user , undefined , 2));
}, (err) => {
	console.log(err);
});