// stacks are last in first out LIFO / FILO
// e.g. book stack (the book you put there last is the first one you get)
// e.g. your browser's back button

// since all functions exist in javascript
// an array with push, pop
const createStack = () => {
  const stack = [];
  return {
    // add to stack
    push: item => {
      stack.push(item);
      // console.log("current stack: ", stack);
    },
    // remove from stack
    pop: () => stack.pop(),
    // peek
    peek: () => stack[stack.length - 1],
    // length
    get length() {
      return stack.length;
    },
    // isEmpty,
    isEmpty: () => stack.length === 0
  };
};

module.exports = createStack;

const s = createStack();

s.push("twitter site");
s.push("facebook site");
s.push("google site");
s.push("linkedin site");

console.log("what is current site?: ", s.peek());
console.log("pressing the back button!");
s.pop();
console.log("what is current site?: ", s.peek());
console.log(s.isEmpty());
s.pop();
console.log("what is current site?: ", s.peek());
s.pop();
console.log("what is current site?: ", s.peek());
s.pop();
console.log("what is current site?: ", s.peek());
s.pop();
console.log("what is current site?: ", s.peek());
s.pop();
console.log("what is current site?: ", s.peek());
console.log(s.isEmpty());

/* other LIFO
The tennis balls in their container.
Processing of procedure calls and their termination.
In a recursive call of a function.
Women wearing bangles, the last bangle she wore is the first one to be removed back.
At a buffet meal, one has to take plates from top. The plate which was places first would be the last to be taken.
Batteries in a flash light, you cannot take out the second battery, unless you remove the last in.
Taking out cookies or biscuits from the carton, you must remove one biscuit at a time, beginning with the one placed on the top. But, this hold true if and only if you are a disciplined chap :P
retrieving recently used objects are faster with lifo and fifo because usually the more recent data is the data you want
*/
