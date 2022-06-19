
// function sum() {
//     let num1 = +document.getElementById("num1").value;
//     let num2 = +document.getElementById("num2").value;
//     let result = num1 + num2;
//     document.getElementById("result").innerHTML = "Result Addition: " + result;
// }

// function subtract() {
//     let num1 = +document.getElementById("num1").value;
//     let num2 = +document.getElementById("num2").value;
//     let result = num1 - num2;
//     document.getElementById("result").innerHTML = "Result Subtraction: " + result;
// }

// function Multiplication() {
//     let num1 = +document.getElementById("num1").value;
//     let num2 = +document.getElementById("num2").value;
//     let result = num1 * num2;
//     document.getElementById("result").innerHTML = "Result Multiplication: " + result;
// }

// function Division() {
//     let num1 = +document.getElementById("num1").value;
//     let num2 = +document.getElementById("num2").value;
//     let result = num1 / num2;
//     document.getElementById("result").innerHTML = "Result Division: " + result;
// }

function div(num1,num2) {
    let result = num1 / num2;
    document.getElementById("result").innerHTML = "Result Division: " + result;
}

function calculate() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let x = document.getElementsByClassName("cal");
    x[0].onclick = function () {
        let result = num1 + num2;
        document.getElementById("result").innerHTML = "Result Addition: " + result;
    }
    x[1].onclick = function () {
        let result = num1 - num2;
        document.getElementById("result").innerHTML = "Result Subtraction: " + result;
    }

    x[2].onclick = function () {
        let result = num1 * num2;
        document.getElementById("result").innerHTML = "Result Multiplication: " + result;
    }

    //Test thử gọi hàm ngoài vào, phải báo biến trong hàm luôn mới được.
    x[3].onclick = div(num1,num2); 

    // x[3].onclick = function () {
    //     let result = num1 / num2;
    //     document.getElementById("result").innerHTML = "Result Division: " + result;
    // }
}