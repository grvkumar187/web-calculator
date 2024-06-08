// script.js

document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.querySelectorAll('.btn'));
    let currentInput = '';
    let operator = null;
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            const type = button.getAttribute('data-type');

            if (type === 'clear') {
                currentInput = '';
                operator = null;
                previousInput = '';
                display.innerText = '0';
            } else if (type === 'operator') {
                if (currentInput === '' && previousInput === '') return;
                if (previousInput === '') {
                    previousInput = currentInput;
                    currentInput = '';
                }
                operator = value;
            } else if (type === 'equal') {
                if (operator && previousInput !== '' && currentInput !== '') {
                    currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
                    display.innerText = currentInput;
                    operator = null;
                    previousInput = '';
                }
            } else {
                if (currentInput.includes('.') && value === '.') return;
                currentInput = currentInput + value;
                display.innerText = currentInput;
            }
        });
    });
});