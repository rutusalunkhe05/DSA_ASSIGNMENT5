//Infix to postfix conversion using stack
//Write a program to convert an infix expression to a postfix expression using a stack.

function precedence(op) {
    if (op === '+' || op === '-') {
        return 1;
    } else if (op === '*' || op === '/') {
        return 2;
    } else {
        return 0;
    }
}
function infixToPostfix(expression) {
    let stack = [];
    let postfix = [];
for (let char of expression) {
        if (!isNaN(char)) {
            postfix.push(char);
        } else if (char === '(') {
             stack.push(char);
        } else if (char === ')') {
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                postfix.push(stack.pop());
            }
            stack.pop(); 
         } else {
             while (stack.length > 0 && precedence(stack[stack.length - 1]) >= precedence(char)) {
                postfix.push(stack.pop());
            }
            stack.push(char);  
        }
    }
     while (stack.length > 0) {
        postfix.push(stack.pop());
    }
    return postfix.join('');
}
const infix = "a+b*(c^d-e)^(f+g*h)-i";
console.log(infixToPostfix(infix)); 