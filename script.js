let currentInput = '0';
let operator = null;
let previousInput = null;

function updateDisplay() {
  document.getElementById('display').innerText = currentInput.replace('.', ',');
}

function clearDisplay() {
  currentInput = '0';
  operator = null;
  previousInput = null;
  updateDisplay();
}

function appendNumber(number) {
  if (currentInput === '0') {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function appendDot() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
  }
  updateDisplay();
}

function addOperator(op) {
  if (operator !== null) {
    calculate();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = '0';
}

function calculate() {
  let result = 0;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  if (isNaN(prev) || isNaN(current)) return;

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = current === 0 ? 'Erro' : prev / current;
      break;
    case '%':
      result = prev % current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = null;
  previousInput = null;
  updateDisplay();
}

function toggleSign() {
  if (currentInput !== '0') {
    currentInput = currentInput.startsWith('-')
      ? currentInput.slice(1)
      : '-' + currentInput;
    updateDisplay();
  }
}
function applyFunction(func) {
  let value = parseFloat(currentInput);
  let result;

  switch (func) {
    case 'sin':
      result = Math.sin(toRadians(value));
      break;
    case 'cos':
      result = Math.cos(toRadians(value));
      break;
    case 'tan':
      result = Math.tan(toRadians(value));
      break;
    case 'sqrt':
      result = Math.sqrt(value);
      break;
    case 'log':
      result = Math.log10(value);
      break;
    case 'ln':
      result = Math.log(value);
      break;
    case 'pow':
      result = Math.pow(value, 2);
      break;
    case 'exp':
      result = Math.exp(value);
      break;
    case 'abs':
      result = Math.abs(value);
      break;
    case 'factorial':
      result = factorial(value);
      break;
    case 'inv':
      result = 1 / value;
      break;
    case 'neg':
      result = -value;
      break;
    case 'rad':
      result = value * (Math.PI / 180);
      break;
    default:
      return;.
  }

  currentInput = result.toString();
  updateDisplay();
}

function insertConstant(constant) {
  if (constant === 'π') {
    currentInput = Math.PI.toString();
  } else if (constant === 'e') {
    currentInput = Math.E.toString();
  }
  updateDisplay();
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function factorial(n) {
  if (n < 0) return NaN;
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= Math.floor(n); i++) {
    result *= i;
  }
  return result;
}

function backspace() {
  currentInput = currentInput.length > 1 ? currentInput.slice(0, -1) : '0';
  updateDisplay();
}