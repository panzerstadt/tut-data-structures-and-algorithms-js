// queue data structure
// is a selection of items that obey the structure of FIFO
// First In First Out

const createQueue = () => {
  // returns as a plain js object
  const queue = [];
  return {
    // add or enqueue
    enqueue: item => {
      queue.push(item);
      console.log("queue: ", queue);
    },
    // remove or dequeue
    dequeue: () => {
      return queue.shift();
    },
    // peek (the item that will be removed next / last item)
    peek: () => {
      return queue[0];
    },
    // length
    get length() {
      return queue.length;
    },
    // isEmpty
    isEmpty: () => {
      return queue.length === 0;
    }
  };
};

const q = createQueue();

console.log(q.isEmpty());

q.enqueue("make an egghead lesson");
q.enqueue("help others learn");
q.enqueue("have only one coffee a day");
q.enqueue("be happy");

console.log(q.length);
console.log(q.isEmpty());

console.log(q.peek());
console.log(q.dequeue());
console.log(q.peek());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.isEmpty());
