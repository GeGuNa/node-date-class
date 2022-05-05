class dates {

constructor() {

this.date = new Date();
	
}

month() {
	return (this.date.getMonth()+1);
}

month2() {

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


week2(){

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

return days[this.date.getDay()];

}


time(){
	return this.date.getTime();
}


request_time(){
	return this.date.getTime();
}



}



module.exports = dates;
