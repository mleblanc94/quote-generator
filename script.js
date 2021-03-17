// //Declaring the input screen on the calculator
// let inputScreen = document.getElementById("inputScreen");
// //Declaring the operations buttons the user can press
// let addition = document.getElementById("addition");
// let subtraction = document.getElementById("subtraction");
// let multiplication = document.getElementById("multiplication");
// let division = document.getElementById("division");
// //number declaration
// let seven = document.getElementById("seven");
// let eight = document.getElementById("eight");
// let nine = document.getElementById("nine");
// let four = document.getElementById("four");
// let five = document.getElementById("five");
// let six = document.getElementById("six");
// let one = document.getElementById("one");
// let two = document.getElementById("two");
// let three = document.getElementById("three");
// //extra buttons on calc
// let point = document.getElementById("point");
// let equals = document.getElementById("equals");
// let clear = document.getElementById("clear");




// one.addEventListener("click", function() {
// 	inputScreen.innerHTML = +=1;
// })

// clear.addEventListener("click", function() {
// 	inputScreen.innerHTML = "";
// })


//function for displaying values
function dis(val)
{
document.getElementById("inputScreen").value+=val
 }
//function for evaluation
function solve()
{
let x = document.getElementById("inputScreen").value
let y = eval(x)
document.getElementById("inputScreen").value = y
}
//function for clearing the display
function clr()
{
document.getElementById("inputScreen").value = ""
}