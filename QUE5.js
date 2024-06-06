// /Evaluate Postfix Expression
//Write a program to evaluate a postfix expression.

function evaluatePostfix(expression) {
    let stack = [];

    for (let char of expression) {
        if (!isNaN(char)) {
         stack.push(parseInt(char, 10));
        } else {
              let b = stack.pop();
            let a = stack.pop();
            let result;

            switch (char) {
                case '+':
                    result = a + b;
                    break;
                case '-':
                    result = a - b;
                    break;
                case '*':
                    result = a * b;
                    break;
                case '/':
                    result = a / b;
                    break;
                default:
                    throw new Error("Unsupported operator: " + char);
            }

            stack.push(result);
        }
    }

   return stack.pop();
}

console.log(evaluatePostfix("231*+9-")); 