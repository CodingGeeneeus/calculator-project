class Calculator {
  constructor(currentOperandText, previousOperandText) {
    this.previousOperandText = previousOperandText;
    this.currentOperandText = currentOperandText;
    this.clear();
  }
  clear() {
    this.currentOperandText = "";
    this.previousOperandText = "";
    this.operation = undefined;
  }
  delete() {
    this.currentOperandText = this.currentOperandText.toString().slice(0, -1);
    this.updateDisplay();
  }
  appendNumber(number) {
    if (number === "." && this.currentOperandText.includes(".")) return;
    this.currentOperandText += number;
  }
  chooseOperation(operation) {
    if (this.currentOperandText === "") return;
    this.operation = operation;
    this.previousOperandText = this.currentOperandText;
    this.previousOperandText += ` ${operation}`;
    this.currentOperandText = " ";
    this.updateDisplay();
  }
  compute() {
    let result;
    let prev = parseFloat(this.previousOperandText);
    let current = parseFloat(this.currentOperandText);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        result = prev + current;
        break;

      case "-":
        result = prev - current;
        break;

      case "*":
        result = prev * current;
        break;

      case "/":
        result = prev / current;
        break;
    }
    this.currentOperandText = result;
    this.operation = undefined;
    this.previousOperandText = "";
  }
  updateDisplay() {
    currentOperandText.textContent = this.currentOperandText;
    previousOperandText.textContent = this.previousOperandText;
  }
}
