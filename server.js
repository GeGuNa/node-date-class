var http = require('http');

const date2 = require('./date.js');

//let date = new date2(15)
let date = new date2()
//let date = new date2(1651785039128)
//let date = new date2(1651784947761)
					


http.createServer(function (request, response) {


  
   response.writeHead(200, {'Content-Type': 'text/html'});
  
  
  
	response.write(` day ${date.day()} <br>`);
	response.write(` month ${date.month()} <br> `);
	response.write(` month_name ${date.month_name()} <br> `);
	response.write(` year ${date.year()}  <br>`);
	response.write(` time ${date.time()}  <br>`);
	response.write(` request_time ${date.request_time()}  <br>`);
	response.write(` hour ${date.hour()}  <br>`);
	response.write(` second ${date.second()}  <br>`)  
  	response.write(` week ${date.week()}  <br>`) 
	response.write(` week_name ${date.week_name()}  <br>`) 
	
		response.write(`<br<br> ========================== <br><br>`);
	
	
	response.write(` utcday ${date.utcday()} <br>`);
	response.write(` utcmonth ${date.utcmonth()} <br> `);
	response.write(` utcmonth_name ${date.utcmonth_name()} <br> `);
	response.write(` utcyear ${date.utcyear()}  <br>`);
	response.write(` utchour ${date.utchour()}  <br>`);
	response.write(` utcsecond ${date.utcsecond()}  <br>`)  
  	response.write(` utcweek ${date.utcweek()}  <br>`) 
	response.write(` utcweek_name ${date.utcweek_name()}  <br>`) 	
	
	
	response.write(` print_utctime ${date.print_utctime()}  <br>`) 	
	response.write(` print_time ${date.print_time()}  <br>`) 	
	
	
	
	response.write(` <br><br><br><br> print ${date.print()}  <br>`) 
		
		
  response.end();

}).listen(2984, ()=> {
console.log(`connected`)
});

