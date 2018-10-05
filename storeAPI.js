var express = require("express")

var server = express()

var store = {
	"pen": 50,
	"phone": 40000,
	"cat": 50000,
	"book": 60
}
server.get("/price/:itemName", function(req, res){
	var item = req.params.itemName.toLowerCase()
	var price = store[item]
	if (!(item in store)){
		res.send("The item is not in our store")
	}
	else {
		res.send("The price of the " + item + " is " + price)
	}
})
server.get("/admin/price/:itemName/:newPrice",function(req,res){
	var newPrice = +req.params.newPrice
	var item = req.params.itemName.toLowerCase()
	store[item] = newPrice


	res.send("The new price of the " + item + " is " + newPrice)
})
server.get("/admin/delete/:itemName",function(req,res){
	var item = +req.params.itemName
	delete store[item]

	res.send("The " + item + " has been deleted")
})
server.listen(3000, function(){
	console.log("Server connected on port 3000")
})