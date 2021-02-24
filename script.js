//Setting actual times to 0 to start
let milliseconds = 00;
let seconds = 00;
//Different Time variables
let appendMilliseconds = document.getElementById("milliseconds");
let appendSeconds = document.getElementById("seconds");
//Button Variables
let buttonStart = document.getElementById("start");
let buttonStop = document.getElementById("stop");
let buttonReset = document.getElementById("reset");
//To store timer values
let interval; 

let startTimer(){
	milliseconds++;

	if (milliseconds < 9) {
		appendMilliseconds.innerHTML = "0" + milliseconds;
	}
	if (milliseconds > 9) {
		appendMilliseconds.innerHTML = milliseconds;
	}
	if (milliseconds > 99) {
		seconds++;
		appendSeconds.innerHTML = "0" + seconds;
		milliseconds = 0;
		appendMilliseconds.innerHTML = "0" + 0;
	}
	if (seconds > 9) {
		appendSeconds.innerHTML = seconds;
	}
}

buttonStart.onClick = function() {
	interval = setInterval(startTimer);
}