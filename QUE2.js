//Balanced Parentheses

function isBalanced(expression) {
    const stack = [];
    const opening = ['(', '{', '['];
    const closing = [')', '}', ']'];
    const matches = { ')': '(', '}': '{',  ']': '['
    };

    for (let char of expression) {
        if (opening.includes(char)) {
            stack.push(char);
        } else if (closing.includes(char)) {
            if (stack.length === 0 || stack.pop() !== matches[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
console.log(isBalanced("{[()]}"));     
console.log(isBalanced("{[(])}"));     