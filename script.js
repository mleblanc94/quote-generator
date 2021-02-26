//Box capturing
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let box9 = document.getElementById("box9");
// Integer I to vary between X and O
let i = 1;


let box1XO = (i) => {
	if (i % 2) {
		box1.innerHTML = "X";
	} else {
		box1.innerHTML = "O";
	}
	i++;
}