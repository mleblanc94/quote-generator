

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