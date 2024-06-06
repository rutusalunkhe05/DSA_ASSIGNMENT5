//Infix to prefix conversion using stack
//Write a program to convert an infix expression to a prefix expression using a stack.


function infixToPrefix(infix) {
      function isOperator(char) {
        return ['+', '-', '*', '/', '^'].includes(char);
    }
     function precedence(operator) {
        switch (operator) {
            case '+':
            case '-':
                return 1;
            case '*':
            case '/':
                return 2;
            case '^':
                return 3;
            default:
                return 0;
        }
    }
        function infixToPostfix(infix) {
        let stack = [];
        let postfix = [];

        for (let i = 0; i < infix.length; i++) {
            let char = infix[i];
            if (char.match(/[a-z0-9]/i)) {
                postfix.push(char);
            } 
                  else if (char === '(') {
                stack.push(char);
            } 
                      else if (char === ')') {
                while (stack.length && stack[stack.length - 1] !== '(') {
                    postfix.push(stack.pop());
                }
                stack.pop(); 
                      } 
                  else if (isOperator(char)) {
                while (stack.length && precedence(stack[stack.length - 1]) >= precedence(char)) {
                    postfix.push(stack.pop());
                }
                stack.push(char);
            }
        }
         while (stack.length) {
            postfix.push(stack.pop());
        }

        return postfix.join('');
    }
       let reversedInfix = infix.split('').reverse().join('');
reversedInfix = reversedInfix.replace(/\(/g, ')').replace(/\)/g, '(');
   let postfix = infixToPostfix(reversedInfix);
  let prefix = postfix.split('').reverse().join('');

    return prefix;
}
const Infix = "a+b*(c^d-e)^(f+g*h)-i";
console.log(infixToPrefix(infix));
