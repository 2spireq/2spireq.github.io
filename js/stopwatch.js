var startStopBtn = document.getElementById("startStop");
var resetBtn = document.getElementById("reset");
var reloadBtn = document.getElementById("reload");

var display = document.getElementById("display");

// Define vars to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// Define vars to hold "display" value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

// Define var to hold setInterval() function
let interval = null;

// Define var to hold stopwatch status
let status = "stopped";

// Stopwatch function (logic to determine when to increment next value, etc.)
function stopWatch() {
	seconds++;

	// Logic to determine when to increment next value
	if (seconds / 60 === 1) {
		seconds = 0;
		minutes++;

		if (minutes / 60 === 1) {
			minutes = 0;
			hours++;
		}
	}

	// If seconds/minutes/hours are only one digit, add a leading 0 to the value
	if (seconds < 10) {
		displaySeconds = "0" + seconds.toString();
	} else{
		displaySeconds = seconds;
	}

	if (minutes < 10) {
		displayMinutes = "0" + minutes.toString();
	} else {
		displayMinutes = minutes;
	}

	if (hours < 10) {
		displayHours = "0" + hours.toString();
	} else {
		displayHours = hours;
	}

	// Display updated time values to user
	display.innerHTML = displayHours + " : " + displayMinutes + " : " + displaySeconds;
}

function startStop() {
	if (status === "stopped") {
		// Start the stopwatch (by calling the setInterval() function)
		interval = window.setInterval(stopWatch, 1000);
		startStopBtn.innerHTML = "Stop";
		status = "started";
		resetBtn.disabled = true;
	} else {
		window.clearInterval(interval);
		startStopBtn.innerHTML = "Start";
		status = "stopped";
		resetBtn.disabled = false;
	}
}

// Function to reset the stopwatch
function reset() {
	window.clearInterval(interval);

	seconds = 0;
	minutes = 0;
	hours = 0;
	
	display.innerHTML = "00 : 00 : 00";
	startStopBtn.innerHTML = "Start";
}

function reloadpage() {
	location.reload();
}