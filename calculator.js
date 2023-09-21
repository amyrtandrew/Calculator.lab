


function add(num1, num2) {
  return num1 + num2
}
function subtract(num1, num2) {
  return num1 - num2
}
function multiply(num1, num2) {
  return num1 * num2
}
function divide(num1, num2) {
  return num1 / num2
}
function power(num1, num2) {
  return num1 ** num2
}
function mod(num1, num2) {
  return num1 % num2
}
function sqrt(num1) {
  return Math.sqrt(num1)
}
function factorial(num1) {
  let answer = 1
  if (!Number.isInteger(num1)) {
    alert(`Integers only`)
    return
  }
  if (num1 === 0 || num1 === 1) {
    return answer
  }
  else if (num1 > 1) {
    for(var i = num1; i >= 1; i--) {
      answer = answer * i
    }
    return answer
  }
  else {
    alert(`Invalid Expression`)
    return
  }
}

function calculate(expression) {
  const tokens = expression.split(' ') 
  let operator
  let num1
  let num2
  if (tokens.length === 2) {
    operator = tokens[0]
    num1 = Number(tokens[1])
  }
  else if (tokens.length === 3) {
    operator = tokens[1]
    num1 = Number(tokens[0])
    num2 = Number(tokens[2])
  }
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    alert(`Please type a number`)
    return
  }
  // if the string is longer than 3, alert "invalid expression"
  if (tokens.length > 3 || tokens.length < 2) {
    alert (`invalid expression`)
    return
  }
  //if the second token is + : call the add function
  if (operator === `+`  || operator === `plus`) {
    return add(num1, num2)
  }
//if the second token is - : call the subtract function
  if (operator === `-`) {
    return subtract(num1, num2)
  }
//if the second token is * : call the multiply function
  if (operator === `*`) {
    return multiply(num1, num2)
  }
//if the second token is / : call the divide function
  if (operator === `/`) {
    return divide(num1, num2)
  }
//if the second token is ^ : call the power function
  if (operator === `^`) {
    return power(num1, num2)
  }
//if the second token is % : call the mod function
  if (operator === `%`) {
    return mod(num1, num2)
  }
  //if the first token is sqrt : call the sqrt function
  if (operator === `sqrt`) {
    return sqrt(num1)
  }
  // if the first token is ! : call the factorial function
  if (operator === `!`) {
    return factorial(num1)
  }
  else {
    alert(`invalid operator`)
    return
  }
}


/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});



