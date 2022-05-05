   ##how to use


var http = require('http');

const date2 = require('./date.js');


let date = new date2()


##standard format

date.day() // returns the monthday  as a number [1-31]   "22"

date.month()  // returns the month as a number (1-12) "5"


date.month_name() // returns month "May" 
 
date.year()  // returns year "2022"


date.time() // 1651786148199  
date.request_time() //returns mileseconds 1651786148199 like in php 


date.hour() // returns the hour

date.second()  // returns the seconds
 
date.week()   //  returns the weekday  [0-6]  
 
date.week_name()   //returns weekday in text format for example:  Friday
date.print_time()   //returns time " 01:29:08 "


    ##UTC format
	
  date.utcday()  // returns the monthday  as a number [1-31]   "22"
  date.utcmonth() // returns the month as a number (1-12) "5"
  date.utcmonth_name() // returns month "May" 
  date.utcyear()  // returns year "2022"
  date.utchour() // returns the hour
  date.utcsecond()   // returns the seconds
  date.utcweek() //  returns the weekday  [0-6]  
  date.utcweek_name() //returns weekday in text format for example:  Friday	
  date.print_utctime  returns time  21:29:08


