// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1
// My implementation if stack without using any builtin methods of array
class Stack {
  constructor(){
    this.data = []
    this.count = 0
  }
  push(record){
    this.data[this.count] = record;
    this.count ++
  }
  pop(){
    this.count --
    return this.data[this.count]
  }
  peek(){
    return (this.data[this.count - 1])
  }
}

module.exports = Stack;
