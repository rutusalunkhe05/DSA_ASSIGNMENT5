//Sort a Stack
//Write a program to sort a stack using recursion.

function sortedInsert(stack, element) {
    if (stack.length === 0 || stack[stack.length - 1] <= element) {
        stack.push(element);
    } else {
          let temp = stack.pop();
        sortedInsert(stack, element);
        stack.push(temp);
    }
}
function sortStack(stack) {
   if (stack.length > 0) {
        let temp = stack.pop();
        sortStack(stack);
      sortedInsert(stack, temp);
    }
}
function printStack(stack) {
    console.log(stack.join(' '));
}
let stack = [34,3,31,98,92,23];
sortStack(stack);
console.log("Sorted Stack:");
printStack(stack);
