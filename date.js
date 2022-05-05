class dates {

constructor(num = null) {

this.num = num;

if (num>0) {
	this.date = new Date(num);
} else {
	this.date = new Date();
}

}

print(){

if (this.num>0) {
	return this.num;
} else {
	return '0';
}

}




month() {
	return (this.date.getMonth()+1);
}

month_name() {

var months_2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
	return months_2[this.date.getMonth()];
	
}

year() {
	return this.date.getFullYear();
}

day(){
	return this.date.getDate();
}

hour(){
	return this.date.getHours();
}

minute(){
	return this.date.getMinutes();
}

second(){
	return this.date.getSeconds();
}

milliseconds(){
	return this.date.getMilliseconds();
}

week(){
	return this.date.getDay();
}


week_name(){

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

return days[this.date.getDay()];

}


time(){
	return this.date.getTime();
}


request_time(){
	return this.date.getTime();
}




/////


utcmonth() {
	return (this.date.getUTCMonth()+1);
}

utcmonth_name() {

var months_2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
	return months_2[this.date.getUTCMonth()];
	
}

utcyear() {
	return this.date.getUTCFullYear();
}

utcday(){
	return this.date.getUTCDate()+1;
}

utchour(){
	return this.date.getUTCHours();
}

utcminute(){
	return this.date.getUTCMinutes();
}

utcsecond(){
	return this.date.getUTCSeconds();
}

utcmilliseconds(){
	return this.date.getUTCMilliseconds();
}

utcweek(){
	return this.date.getUTCDay()+1;
}


utcweek_name(){

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

return days[this.date.getUTCDay()+1];

}


//from w3schools
addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}



print_utctime(){

//from w3schools


let h = this.addZero(this.date.getUTCHours());
let m = this.addZero(this.date.getUTCMinutes());
let s = this.addZero(this.date.getUTCSeconds());
let time = h + ":" + m + ":" + s;


return `${h}:${m}:${s}`


}


print_time(){

let h = this.addZero(this.hour());
let m = this.addZero(this.minute());
let s = this.addZero(this.second());
let time = h + ":" + m + ":" + s;


return `${h}:${m}:${s}`


}



}



module.exports = dates;
