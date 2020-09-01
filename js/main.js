var formDetails = document.getElementById("formDetails");
var examNameDisplay = document.getElementById("examNameDisplay");
var examDate = document.getElementById("examDate");
var readingTime = document.getElementById("readingTime");
var writingTime = document.getElementById("writingTime");
var examName = document.getElementById("examName");
var submitBtn = document.getElementById("submitBtn");
var stopwatch = document.getElementById("stopwatch");

function setDetails() {
  	var x = formDetails;
 	var text = "";
 	var i;
 	for (i = 0; i < x.length ;i++) {
  		text += x.elements[i].value + "<br>";
  	}

  	n =  new Date();
	y = n.getFullYear().toString();
	m = n.getMonth() + 1;
	m = m.toString();
	d = n.getDate().toString();

	if (m.length < 2) {
			m = "0" + m;
	}

	if (d.length < 2) {
			d = "0" + d;
	}

	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var dayName = new Date();
	var dayName = days[dayName.getDay()];

	examName = examName.options[examName.selectedIndex].value;
	console.log(examName);

	if (examName == "English Advanced Paper 1") {
		readingTime.innerHTML = "Reading time: 10 minutes";
		writingTime.innerHTML = "Writing time: 1 hour 30 minutes";
	} else {
		readingTime.innerHTML = "Reading time: 5 minutes";
		writingTime.innerHTML = "Writing time: 2 hours";
	};

	examNameDisplay.innerHTML = text;
	examDate.innerHTML = dayName + " " + d + "/" + m + "/" + y;

	formDetails.style.display = "none";
	submitBtn.style.display = "none";
    stopwatch.style.visibility = "visible";
}