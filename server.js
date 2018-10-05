var http = require("http")
var server = http.createServer()
server.on("request",function(request,response){
	var geek = request.url
	var joinedName = geek.split("")
	joinedName.shift()
	joinedName = joinedName.join("")
	console.log(joinedName + " has connected")
	if (joinedName = ="page") {
		response.write("Welcome to the world.hh")
		response.end()
	}
	else {
		response.write("Forbidden")
		response.end()
	}
})
// console.log(server)
server.listen(3000)
