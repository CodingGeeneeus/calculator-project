
class Calculator {
    constructor(currentOperandText , previousOperandText) {
        this.previousOperandText = previousOperandText;
        this.currentOperandText = currentOperandText;
        this.clear();
    }
    clear(){
        this.currentOperandText = ''
        this.previousOperandText = ''
        this.operation = undefined
    }
    delete(){
        this.currentOperandText = this.currentOperandText.toString().slice(0, -1)
        this.updateDisplay()
    }
    appendNumber(number){
        if(number ==='.' && this.currentOperandText.includes('.')) return;
        this.currentOperandText += number
    }
    chooseOperation(operation){
        this.operation = operation;
        this.previousOperandText = this.currentOperandText
        this.previousOperandText += ` ${operation}`
        this.currentOperandText = ' '
        this.updateDisplay()
        
    }
    compute(){
        let result;
        let prev = parseFloat(this.previousOperandText)
        let current = parseFloat(this.currentOperandText)
        if(isNaN(prev) || isNaN(current)) return;
        switch(this.operation){
            case '+':
                result = prev + current
                break;

            case '-':
                result = prev - current
                break;

            case '*':
                result = prev * current
                break
            
            case '/':
                result = prev / current
                break;
        }
        this.currentOperandText = result
        this.operation = undefined
        this.previousOperandText = ''
        }
    updateDisplay() {

        currentOperandText.textContent = this.currentOperandText;
        previousOperandText.textContent = this.previousOperandText;
        console.log(this.currentOperandText, typeof this.currentOperandText);
        
    }
}




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
