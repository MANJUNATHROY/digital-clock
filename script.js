function displaytime() {
	var d = new Date();
	var hours = d.getHours();
	var min = d.getMinutes();
	var sec = d.getSeconds();
	var session = document.getElementById("session");

	if (hours >= 12) {
		session.innerHTML = 'PM';
		hours = hours - 12;
	}


	else {
		session.innerHTML = 'AM';
	}
	document.getElementById('hours').innerHTML = hours;
	document.getElementById('minutes').innerHTML = min;
	document.getElementById('seconds').innerHTML = sec;

}
setInterval(displaytime, 10);
