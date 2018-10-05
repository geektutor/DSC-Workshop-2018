var express = require("express")
var server = express()

server.get("/add/:a/:b", function(req,res){
	var firstNumber = +req.params.a
	var secondNumber = +req.params.b
	var total = firstNumber + secondNumber
	res.end(String(total))
})

server.get("/sub/:a/:b", function(req,res){
	var firstNumber = Number(req.params.a)
	var secondNumber = Number(req.params.b)
	var total = firstNumber - secondNumber
	res.end("" + total)
})

server.get("/multiply/:a/:b", function(req,res){
	var firstNumber = Number(req.params.a)
	var secondNumber = Number(req.params.b)
	var total = firstNumber * secondNumber
	res.end("" + total)
})

server.get("/divide/:a/:b", function(req,res){
	var firstNumber = Number(req.params.a)
	var secondNumber = Number(req.params.b)
	var total = firstNumber / secondNumber
	res.end("" + total)
})

server.get("/:a/mod/:b", function(req,res){
	var firstNumber = Number(req.params.a)
	var secondNumber = Number(req.params.b)
	var total = firstNumber % secondNumber
	res.end("" + total)
})

server.listen(3000, function(){
	console.log("Server listening at port 3000")
})
