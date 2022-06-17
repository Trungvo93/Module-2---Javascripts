
function sum(){
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let result = num1+num2;
    document.getElementById("result").innerHTML = "Result Addition: " + result;
}

function subtract(){
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let result = num1-num2;
    document.getElementById("result").innerHTML = "Result Subtraction: " + result;
}

function Multiplication(){
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let result = num1*num2;
    document.getElementById("result").innerHTML = "Result Multiplication: " + result;
}

function Division(){
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let result = num1/num2;
    document.getElementById("result").innerHTML = "Result Division: " + result;
}