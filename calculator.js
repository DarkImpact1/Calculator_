let num1, num2, oprtr, number;
oprtr = null;

function clear() {
  document.getElementById("output").innerHTML = "bj";
  console.log("c pressed");
}

function operator(opr) {
  oprtr = document.getElementById("output").innerHTML += ` ${opr} `;
}
function numbers(num) {
  if (oprtr == null) {
    num1 = document.getElementById("output").innerHTML += num;
    console.log(num1);
  } else {
    num2 = document.getElementById("output").innerHTML += num;
    console.log(num2);
  }
}

function result() {
  switch (oprtr) {
    case "+":
      return (document.getElementById("Output").innerHTML = num1 + num2);
      break;
    case "-":
      return (document.getElementById("Output").innerHTML = num1 - num2);
      break;
    case "/":
      return (document.getElementById("Output").innerHTML = num1 / num2);
      break;
    case "%":
      return (document.getElementById("Output").innerHTML = num1 % num2);
      break;
    case "*":
      return (document.getElementById("Output").innerHTML = num1 * num2);
      break;
    case "%":
      return (document.getElementById("Output").innerHTML = num1 % num2);
      break;
  }
}
