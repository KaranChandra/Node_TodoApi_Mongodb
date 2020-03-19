const {ObjectID} = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./model/todo');
var {User} = require('./model/user');

var app = express();

app.use(bodyParser.json()); //req is url encoded so we need to convert it in understandable format

app.post('/todos', (req , res) => {
	var todo = new Todo({
		text : req.body.text
	});

	todo.save().then((doc) =>{
		res.send(doc);
	}, (err) =>{
		res.status(400).send(err);
	});
});

app.get('/todos' , (req,res) => {
	Todo.find().then( (todos) => {
		res.send(todos);
	}, (err) => {
		res.status(400).send(err);
	});
});

app.get('/todos/:id' , (req , res) =>{
	var id = req.params.id;

	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}

	Todo.findById(id).then( (todo) =>{
		if(!todo){
			return res.status(404).send();
		}

		res.send({todo});

	}).catch( (e) =>{
		res.status(400).send();
	});
});

app.listen(3000 , () => {
	console.log("Server is up on Port 3000");
});