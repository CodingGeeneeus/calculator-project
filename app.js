
var inputScreen = document.getElementById('screenContent');
const numButtons = document.querySelectorAll('[data-numbuttons]');
const operationButtons = document.querySelectorAll('[data-operation]')
const clearButton = document.querySelector('[data-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]')

let previousOperandText = document.querySelector('[data-previous-operand]')
let currentOperandText = document.querySelector('[data-current-operand]')

let displayValue = document.getElementById('screenContent')

const calculator = new Calculator(previousOperandText, currentOperandText)

numButtons.forEach(button => button.addEventListener('click', () => {
    if(calculator.currentOperandText.includes('.') && button == '.') return;
    calculator.appendNumber(button.textContent)
    calculator.updateDisplay()
}))

operationButtons.forEach(button => button.addEventListener('click', () => {
    calculator.chooseOperation(button.textContent)
    calculator.updateDisplay()
}))

deleteButton.addEventListener('click' , () => {
    calculator.delete()
});

equalsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
})

clearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})
