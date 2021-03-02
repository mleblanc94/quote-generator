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
let i = 2;
//Letting the players set their names for the game
let player1 = prompt("Player 1 - Please enter your name:");
let player2 = prompt("Player 2 - Please enter your name:");

let box1XO = (i) => {
	if (i % 2 === 0) {
		box1.innerHTML = "X";
	} else {
		box1.innerHTML = "O";
	};
	i++;
}

let box2XO = (i) => {
	if (i % 2 === 0) {
		box2.innerHTML = "X";
	} else {
		box2.innerHTML = "O";
	};
	i++;
}

let box3XO = (i) => {
	if (i % 2 === 0) {
		box3.innerHTML = "X";
	} else {
		box3.innerHTML = "O";
	};
	i++;
}

let box4XO = (i) => {
	if (i % 2 === 0) {
		box4.innerHTML = "X";
	} else {
		box4.innerHTML = "O";
	};
	i++;
}

let box5XO = (i) => {
	if (i % 2 === 0) {
		box5.innerHTML = "X";
	} else {
		box5.innerHTML = "O";
	};
	i++;
}

let box6XO = (i) => {
	if (i % 2 === 0) {
		box6.innerHTML = "X";
	} else {
		box6.innerHTML = "O";
	};
	i++;
}

let box7XO = (i) => {
	if (i % 2 === 0) {
		box7.innerHTML = "X";
	} else {
		box7.innerHTML = "O";
	}
	i++;
}

let box8XO = (i) => {
	if (i % 2 === 0) {
		box8.innerHTML = "X";
	} else {
		box8.innerHTML = "O";
	};
	i++;
}

let box9XO = (i) => {
	if (i % 2 === 0) {
		box9.innerHTML = "X";
	} else {
		box9.innerHTML = "O";
	};
	i++;
}
