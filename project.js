var express = require("express")

var server = express()

var records = {
	"001": {
		firstName: "Sola",
		lastName: "Adesokan",
		age: 17
	},

	"002": {
		firstName: "Femi",
		lastName: "Omolaja",
		age: 19
	},

	"003": {
		firstName: "Abayo",
		lastName: "Okeowo",
		age: 20
	},

	"004": {
		firstName:"Olayemi",
		lastName: "Olak",
		age:50
	},

	"005": {
		firstName:"Aliat",
		lastName: "Akinjobi",
		age:12
	},

	"006": {
		firstName:"Abdullahi",
		lastName: "Akinjobi",
		age:17
	},

	"007": {
		firstName: "Mistura",
		lastName: "Olisa",
		age: 30
	},
	"008": {
		firstName: "Abisola",
		lastName: "Chinenye",
		age: 19
	},
	"009": {
		firstName: "Pearl",
		lastName: "Titilayo",
		age: 21
	},
	"010": {
		firstName: "Praise",
		lastName: "Anene",
		age: 12
	}
};

server.get("/students/create/:m/:a/:b/:c", function(req, res){
	var firstName = req.params.a.toLowerCase()
	var lastName = req.params.b.toLowerCase()
	var age = +req.params.c
	var matricNo = req.params.m
	if (matricNo in records){
		res.send("Matric number already exists")
	}
	else {
		records[matricNo] = {
			firstName: firstName,
			lastName: lastName,
			 age: age
			}
		res.send("A new student with name " + records[matricNo].firstName + " " + records[matricNo].lastName + ", and age " + records[matricNo].age + ", has been created")
	}
})

server.get("/students/:m", function(req, res){
	var matricNo = req.params.m
	if(matricNo in records){
		var firstName = records[matricNo].firstName
		var lastName = records[matricNo].lastName
		var age = records[matricNo].age
		res.send(firstName + " " + lastName + " - " + age)
	}
	else {
		res.send("Detail not found")
	}
})

server.get("/students/:m/firstName", function(req, res){
	var matricNo = req.params.m
	//var geekName = req.params.firstName
	if (matricNo in records){
			var geekName = records[matricNo].firstName
			res.send(geekName)
	}
	else {
		res.send("Detail not found")
	}
})

server.get("/students/:m/lastName", function(req, res){
	var matricNo = req.params.m
	//var lastName = req.params.firstName
	if (matricNo in records){
			var geekName = records[matricNo].lastName
			res.send(geekName)
	}
	else {
		res.send("Detail not found")
	}
})

server.get("/students/:m/age", function(req, res){
	var matricNo = req.params.m
	//var lastName = req.params.firstName
	if (matricNo in records){
			var Gage = "" + records[matricNo].age
			res.send(Gage)
	}
	else {
		res.send("Detail not found")
	}
})

server.get("/students/edit/:m/firstName/:a", function(req, res){
	var matricNo = req.params.m
	var firstName = req.params.a
	//var lastName = req.params.firstName
	if (matricNo in records){
		oldfirst = records[matricNo].firstName
		records[matricNo].firstName = firstName
		lastName = records[matricNo].lastName
		res.send(oldfirst + " " + lastName + " has been changed to " + firstName + " " + lastName)
	}
	else {
		res.send("Detail not found")
	}
})

server.get("/students/edit/:m/lastName/:a", function(req, res){
	var matricNo = req.params.m
	var lastName = req.params.a
	//var lastName = req.params.firstName
	if (matricNo in records){
		oldlast = records[matricNo].lastName
		records[matricNo].lastName = lastName
		firstName = records[matricNo].firstName
		res.send(firstName + " " + oldlast + " has been changed to " + firstName + " " + lastName)
	}
	else {
		res.send("Detail not found")
	}
})

server.get("/students/edit/:m/age/:a", function(req, res){
	var matricNo = req.params.m
	var age = req.params.a
	//var lastName = req.params.firstName
	if (matricNo in records){
		oldfirst = records[matricNo].firstName
		records[matricNo].age = age
		age = records[matricNo].age
		res.send(oldfirst + "'s age has been changed to " + age)
		}
	else {
		res.send("Detail not found")
	}
})

server.get("/students/delete/:m", function(req, res){
	var matricNo = req.params.m
	if (matricNo in records){
		delete records[matricNo]
		res.send("The student with matric number " + matricNo + " has been removed")
	}
	else {
		res.send("Detail not found")
	}
})
server.listen(3000, function(){
	console.log("Server connected on port 3000")
})