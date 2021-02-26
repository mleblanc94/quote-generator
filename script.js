//Box capturing
let box1 = getElementById("box1");
let box2 = getElementById("box2");
let box3 = getElementById("box3");
let box4 = getElementById("box4");
let box5 = getElementById("box5");
let box6 = getElementById("box6");
let box7 = getElementById("box7");
let box8 = getElementById("box8");
let box9 = getElementById("box9");
// Integer I to vary between X and O
let i = 1;


let box1XO = (i) => {
	if (i % 2) {
		box1.innerHTML = "X";
	} else {
		box1.innerHTML = "O";
	}
	i++
}