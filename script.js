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
//Text Area Capturing
let textarea1 = document.getElementById("textarea1");
let textarea2 = document.getElementById("textarea2");
// Integer I to vary between X and O
let i = 2;
//Letting the players set their names for the game
let player1 = prompt("Player 1 - Please enter your name:");
let player2 = prompt("Player 2 - Please enter your name:");

if (player1 === "") {
	player1 = "Player 1";
}

if (player2 === "") {
	player2 = "Player 2";
}

textarea1.innerHTML = `${player1} - You are X - and you're up!`;

let box1XO = () => {
	if (i % 2 === 0) {
		box1.innerHTML = "X";
        textarea2.innerHTML = `${player2}, you are up!`
        textarea1.innerHTML = "";
        checkWin();
	} else {
		box1.innerHTML = "O";
		textarea1.innerHTML = `${player1}, your turn!`
		textarea2.innerHTML = "";
		checkWin();
	};
	i++;
}

let box2XO = () => {
	if (i % 2 === 0) {
		box2.innerHTML = "X";
		textarea2.innerHTML = `${player2}, you are up!`
        textarea1.innerHTML = "";
        checkWin();
	} else {
		box2.innerHTML = "O";
		textarea1.innerHTML = `${player1}, your turn!`
		textarea2.innerHTML = "";
		checkWin();
	};
	i++;
}

let box3XO = () => {
	if (i % 2 === 0) {
		box3.innerHTML = "X";
		textarea2.innerHTML = `${player2}, you are up!`
        textarea1.innerHTML = "";
        checkWin();
	} else {
		box3.innerHTML = "O";
		textarea1.innerHTML = `${player1}, your turn!`
		textarea2.innerHTML = "";
		checkWin();
	};
	i++;
}

let box4XO = () => {
	if (i % 2 === 0) {
		box4.innerHTML = "X";
		textarea2.innerHTML = `${player2}, you are up!`
        textarea1.innerHTML = "";
        checkWin();
	} else {
		box4.innerHTML = "O";
		textarea1.innerHTML = `${player1}, your turn!`
		textarea2.innerHTML = "";
		checkWin();
	};
	i++;
}

let box5XO = () => {
	if (i % 2 === 0) {
		box5.innerHTML = "X";
		textarea2.innerHTML = `${player2}, you are up!`
        textarea1.innerHTML = "";
        checkWin();
	} else {
		box5.innerHTML = "O";
		textarea1.innerHTML = `${player1}, your turn!`
		textarea2.innerHTML = "";
		checkWin();
	};
	i++;
}

let box6XO = () => {
	if (i % 2 === 0) {
		box6.innerHTML = "X";
		textarea2.innerHTML = `${player2}, you are up!`
        textarea1.innerHTML = "";
        checkWin();
	} else {
		box6.innerHTML = "O";
		textarea1.innerHTML = `${player1}, your turn!`
		textarea2.innerHTML = "";
		checkWin();
	};
	i++;
}

let box7XO = () => {
	if (i % 2 === 0) {
		box7.innerHTML = "X";
		textarea2.innerHTML = `${player2}, you are up!`
        textarea1.innerHTML = "";
        checkWin();
	} else {
		box7.innerHTML = "O";
		textarea1.innerHTML = `${player1}, your turn!`
		textarea2.innerHTML = "";
		checkWin();
	}
	i++;
}

let box8XO = () => {
	if (i % 2 === 0) {
		box8.innerHTML = "X";
		textarea2.innerHTML = `${player2}, you are up!`
        textarea1.innerHTML = "";
        checkWin();
	} else {
		box8.innerHTML = "O";
		textarea1.innerHTML = `${player1}, your turn!`
		textarea2.innerHTML = "";
		checkWin();
	};
	i++;
}

let box9XO = () => {
	if (i % 2 === 0) {
		box9.innerHTML = "X";
		textarea2.innerHTML = `${player2}, you are up!`
        textarea1.innerHTML = "";
        checkWin();
	} else {
		box9.innerHTML = "O";
		textarea1.innerHTML = `${player1}, your turn!`
		textarea2.innerHTML = "";
		checkWin();
	};
	i++;
}


let checkWin = () => {
if (box1.innerHTML === "X" && box4.innerHTML === "X" && box7.innerHTML === "X") {
	alert(player1 + " WINS!!!!!");
} else if (box3.innerHTML === "X" && box6.innerHTML === "X" && box9.innerHTML === "X") {
	alert(player1 + " WINS!!!!!");
} else if (box7.innerHTML === "X" && box8.innerHTML === "X" && box9.innerHTML === "X") {
	alert(player1 + " WINS!!!!!");
} else if (box2.innerHTML === "X" && box5.innerHTML === "X" && box8.innerHTML === "X") {
	alert(player1 + " WINS!!!!!");
} else if (box1.innerHTML === "X" && box2.innerHTML === "X" && box3.innerHTML === "X") {
	alert(player1 + " WINS!!!!!");
} else if (box4.innerHTML === "X" && box5.innerHTML === "X" && box6.innerHTML === "X") {
	alert(player1 + " WINS!!!!!");
} else if (box1.innerHTML === "X" && box5.innerHTML === "X" && box9.innerHTML === "X") {
	alert(player1 + " WINS!!!!!");
} else if (box3.innerHTML === "X" && box5.innerHTML === "X" && box7.innerHTML === "X") {
	alert(player1 + " WINS!!!!!");
} else if (box3.innerHTML === "O" && box6.innerHTML === "O" && box9.innerHTML === "O") {
	alert(player2 + " WINS!!!!!");
} else if (box7.innerHTML === "O" && box8.innerHTML === "O" && box9.innerHTML === "O") {
	alert(player2 + " WINS!!!!!");
} else if (box2.innerHTML === "O" && box5.innerHTML === "O" && box8.innerHTML === "O") {
	alert(player2 + " WINS!!!!!");
} else if (box1.innerHTML === "O" && box2.innerHTML === "O" && box3.innerHTML === "O") {
	alert(player2 + " WINS!!!!!");
} else if (box4.innerHTML === "O" && box5.innerHTML === "O" && box6.innerHTML === "O") {
	alert(player2 + " WINS!!!!!");
} else if (box1.innerHTML === "O" && box5.innerHTML === "O" && box9.innerHTML === "O") {
	alert(player2 + " WINS!!!!!");
} else if (box3.innerHTML === "O" && box5.innerHTML === "O" && box7.innerHTML === "O") {
	alert(player2 + " WINS!!!!!");
} else if (box1.innerHTML === "O" && box4.innerHTML === "O" && box7.innerHTML === "O") {
	alert(player2 + " WINS!!!!!");
}
};


let reset = () => {
	box1.innerHTML = "";
	box2.innerHTML = "";
	box3.innerHTML = "";
	box4.innerHTML = "";
	box5.innerHTML = "";
	box6.innerHTML = "";
	box7.innerHTML = "";
	box8.innerHTML = "";
	box9.innerHTML = "";
    textarea1.innerHTML = `${player1} - You are X - and you're up!`
    textarea2.innerHTML = "";
    i = 2;
}


