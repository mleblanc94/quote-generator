let billAmount = document.getElementById("input1");
let serviceLevel = document.getElementById("selectID");
let amountPeople = document.getElementById("input2");
let button = document.getElementById("button");
let answer = document.getElementById("answer");

let realBillAmount = Number(billAmount.value);
let realAmountPeople = Number(amountPeople.value);
console.log(realBillAmount);

let a = realBillAmount / realAmountPeople;

let calculation = (a) => {
	if (serviceLevel.value === "poor") {
		return a * .10;
	} else if (serviceLevel.value === "average") {
		return a * .15;
	} else if (serviceLevel.value === "good") {
		return a * .20;
	} else if (serviceLevel.value === "great") {
		return a * .25;
	}
}

let appendAnswer = () => {
    let h1 = document.createElement("h1");
	h1.appendChild(document.createTextNode(calculation()));
	answer.appendChild(h1);
	billAmount.value = "";
	serviceLevel.value = "";
	amountPeople.value = "";
}

button.addEventListener("click", appendAnswer);
