// Prefix to infix conversion using stack
// Write a program to convert a prefix expression to an infix expression using a stack.

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}
function prefixToInfix(expression) {
    let stack = [];
     for (let i = expression.length - 1; i >= 0; i--) {
        let char = expression[i];
        if (isOperator(char)) {
            let operand1 = stack.pop();
            let operand2 = stack.pop();
             let subExpression = `(${operand1}${char}${operand2})`;
            stack.push(subExpression);
        } else {
            stack.push(char);
        }
    }
    return stack.pop();
}
const prefix = "*+AB-CD";
console.log(prefixToInfix("prefix"));
