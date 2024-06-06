//Postfix to infix conversion using stack
//Write a program to convert a postfix expression to an infix expression using a stack.

function postfixToInfix(postfix) {
     let stack = [];

    function isOperator(char) {
        return ['+', '-', '*', '/'].includes(char);
    }
      for (let i = 0; i < postfix.length; i++) {
        let char = postfix[i];
           if (!isOperator(char)) {
            stack.push(char);
        } 
        else
         {

            let operand2 = stack.pop();
            let operand1 = stack.pop();
             let newExpression = `(${operand1}${char}${operand2})`;
              stack.push(newExpression);
        }
    }
     return stack[0];
}
let postfixExpression = "ab+cd-*";
let infixExpression = postfixToInfix(postfixExpression);
console.log("Postfix Expression:", postfixExpression);
console.log("Infix Expression:", infixExpression);
