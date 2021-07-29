// var button = document.getElementsByClassName("col");
// var display = document.getElementById("display");
// display.textContent = 0;
// operand1 = 0;
// operator = null;
// operand2 = null;

// for (var i = 0; i < button.length; i++) {
//   button[i].addEventListener("click", showup);
// }
// function showup() {
//   var value = this.getAttribute("value");
//   var text = display.textContent;

//   if (value == "+" || value == "-" || value == "*" || value == "/") {
//     operand1 = parseFloat(text);
//     operator = value;
//     display.textContent = "";
//   } else if (value == "AC") {
//     display.textContent = "";
//   } else if (value == "sign") {
//     operand1 = parseFloat(text);
//     operand1 = -1 * operand1;
//     display.textContent = operand1;
//   } else if (value == "%") {
//     operand1 = parseFloat(text);
//     operand1 = opearnd1 / 100;
//     display.textContent = operand1;
//   } else if (value == ".") {
//     if (display.textContent.includes(".")) {
//       display.innerText = "Error";
//     }
//     display.innerText += ".";
//   } else if (value == "=") {
//     operand2 = parseFloat(text);
//     var result = eval(operand1 + " " + operator + " " + operand2);
//     if (result) {
//       display.textContent = result;
//       operand1 = result;
//       operand2 = null;
//       operator = null;
//     }
//   } else {
//     display.textContent += value;
//   }
// }
var button = document.getElementsByClassName("col");
var display = document.getElementById("display");
var display2 = document.getElementById("display2");
operator1 = "";
operand = null;
var prev;
for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", showup);
}
function showup() {
  // var result = this.getAttribute("value");
  var x = this.textContent.trim();
  // display.textContent += x;
  // console.log(x);
  if (x == "AC") {
    display.textContent = "";
    display2.textContent = "";
  } else if (x == ".") {
    console.log(display.innerText);
    if (display2.innerText.includes(".")) {
      display.innerText = "Error";

      return;
    }
    display.innerText += x;

    display2.innerText += x;
  } else if (x == "+/-*") {
    var z = display.textContent;
    if (z == "") {
      display.textContent = "error";
    } else {
      display.textContent = z * -1;
    }
  } else if (x == "+" || x == "-" || x == "*" || x == "/" || x == "%") {
    display.textContent += " " + x + " ";
    display2.textContent = "";
    operand = x;
  } else if (x == "=") {
    operator1 = display.textContent;

    display.textContent = eval(operator1);
    display2.textContent = " ";
  } else if (x == "C") {
    var str = display.textContent;
    str = str.substring(0, str.length - 1);
    display.textContent = str;
    return;
  } else {
    display.textContent += x;

    display2.textContent += x;
  }
}
