// CALCULATE TIP
let calculateTip = () => {
let billAmount = document.getElementById("input1").value;
let serviceLevel = document.getElementById("selectID").value;
let amountPeople = document.getElementById("input2").value;

// VALIDATE INPUT

if (billAmount === "" || amountPeople == 0) {
	alert("Please enter values");
	return;
}

// CHECK IF THIS INPUT IS EMPTY OR LESS THAN OR EQUAL TO 1
if (amountPeople === "" || amountPeople <=1) {
	amountPeople = 1;
	document.getElementById("each").style.display = "none";
} else {
	document.getElementById("each").style.display = "block";
}

// CALCULATE TIP
let total = (billAmount / amountPeople) * serviceLevel;
// ROUND TO TWO DECIMALS
total = Math.round(total * 100) / 100;
// NEXT LINE ALLOWS US TO ALWAYS HAVE TWO DIGITS AFTER DECIMAL POINT
total = total.toFixed(2);
// DISPLAY THE TIP
document.getElementById("totalTip").style.display = "block";
document.getElementById("tip").innerHTML = total;
}

// HIDE THE TIP AMOUNT ON LOAD
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// CLICK TO CALL FUNCTION
document.getElementById("button").onclick = function() {
	calculateTip();
	billAmount = "";
	serviceLevel = "";
	amountPeople = "";
}
