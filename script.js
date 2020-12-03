let billAmount = document.getElementById("input1").value;
let serviceLevel = document.getElementById("selectID").value;
let amountPeople = document.getElementById("input2").value;
let button = document.getElementById("button");
let answer = document.getElementById("answer");

let realBillAmount = Number(billAmount);
let realAmountPeople = Number(amountPeople);

let a = realBillAmount / realAmountPeople;

console.log(a);

let calculation = (a) => {
	if (serviceLevel === "poor") {
		return a * .10;
	} else if (serviceLevel.value === "average") {
		return a * .15;
	} else if (serviceLevel.value === "good") {
		return a * .20;
	} else if (serviceLevel.value === "great") {
		return a * .25;
	}
}

console.log(calculation());

let appendAnswer = () => {
    let h1 = document.createElement("h1");
	h1.appendChild(document.createTextNode(calculation()));
	answer.appendChild(h1);
	billAmount.value = "";
	serviceLevel.value = "";
	amountPeople.value = "";
}

button.addEventListener("click", appendAnswer);
