//Next Greater Element

function nextGreaterElement(arr) {
    let result = new Array(arr.length).fill(-1); 
    let stack = []; 
     for (let i = 0; i < arr.length; i++) {
            while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
            let index = stack.pop(); 
            result[index] = arr[i]; 
             }
        stack.push(i); 
    }

    return result;
}
console.log(nextGreaterElement([4, 5, 2, 25])); 