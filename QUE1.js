    //QUE1= PUSH,POP,PEEK,ISEMPTY

class Stack {
    constructor() {
        this.stack = [];
    }

    push(item) {
        this.stack.push(item);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("pop from empty stack");
        }
        return this.stack.pop();
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("peek from empty stack");
        }
        return this.stack[this.stack.length - 1];
    }
    
    isEmpty() {
        return this.stack.length === 0;
    }
}

const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
console.log(s.peek());   
console.log(s.pop());    
console.log(s.isEmpty()); 
console.log(s.pop());   
console.log(s.isEmpty()); 
