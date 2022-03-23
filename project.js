var screen = document.getElementById('display');
var box = document.getElementsByClassName('box');
var operator = null;
var operand1 = 0;
var operand2 = null;

for (let i = 0; i < box.length; i++) {
    console.log(i);

    box[i].addEventListener('click', function () {
        var value = this.getAttribute('data-value');
        switch (value) {
            case '+':
                operator = '+';
                operand1 = parseFloat(screen.textContent);
                screen.innerText = null;
                break;
            case '-':
                operator = '-';
                operand1 = parseFloat(screen.textContent);
                screen.innerText = null;
                break;
            case '/':
                operator = '/';
                operand1 = parseFloat(screen.textContent);
                screen.innerText = null;
                break;
            case '*':
                operator = '*';
                operand1 = parseFloat(screen.textContent);
                screen.innerText = null;
                break;
            case '%':
                operator = '%';
                operand1 = parseFloat(screen.textContent);
                screen.innerText = null;
                break;
            case '.':
                operator = '.';
                operand1 = parseFloat(screen.textContent);
                screen.innerText += '.';
                break;
            case '+/-':
                operand1 = parseFloat(screen.textContent);
                screen.innerText = '-' + operand1;

                break;
            case 'AC':
                screen.innerText = null;
                break;
            case '=':
                operand2 = parseFloat(screen.textContent);
                if (operand2 == 0 && operator == '/') {
                    screen.innerText = 'ERROR';
                }
                else {
                    screen.innerText = eval(operand1 + " " + operator + " " + operand2);
                }
                break;

            default:
                screen.innerText += value;
                break;
        }
    });
}