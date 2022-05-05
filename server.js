var http = require('http');

const date2 = require('./date.js');

let date = new date2()


http.createServer(function (request, response) {


  
   response.writeHead(200, {'Content-Type': 'text/html'});
  
  
  
	response.write(` day ${date.day()} <br>`);
	response.write(` month ${date.month()} <br> `);
	response.write(` month2 ${date.month2()} <br> `);
	response.write(` year ${date.year()}  <br>`);
	response.write(` time ${date.time()}  <br>`);
	response.write(` request_time ${date.request_time()}  <br>`);
	response.write(` hour ${date.hour()}  <br>`);
	response.write(` second ${date.second()}  <br>`)  
  	response.write(` week ${date.week()}  <br>`) 
	response.write(` week2 ${date.week2()}  <br>`) 
	
	
  response.end();

}).listen(2984, ()=> {
console.log(`connected`)
});

