// Postfix to prefix conversion using stack
// Write a program to convert a postfix expression to a prefix expression using a stack.

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}
function postfixToPrefix(expression) {
    let stack = [];
       for (let char of expression) {
        if (isOperator(char)) {
                 let operand2 = stack.pop();
            let operand1 = stack.pop();
                let subExpression = char + operand1 + operand2;
              stack.push(subExpression);
        } else {
                    stack.push(char);
        }
    }
     return stack.pop();
}
console.log(postfixToPrefix("AB+CD-*")); 