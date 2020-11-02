class Stack {
    #stack = [];
    #count
    peek() {
        if (this.#stack.length < 1) throw new Error('Stack is empty')
        console.log(`${this.#stack[this.#stack.length-1]} is the last item in the stack`);
    }
    pop() {
        if (this.#stack.length < 1) throw new Error('Stack is empty')
        const popped = this.#stack.pop();
        console.log(`${popped} has been popped from the stack`);
        this.#count = this.#stack.length;
    }
    push(item) {
        this.#stack.push(item);
        console.log(`${item} has been pushed into the stack`);
        this.#count = this.#stack.length;
    }
    get count() {
        return this.#count;
    }
}

const s = new Stack();
s.push(1);
s.push(2);
s.peek();
console.log(`There are ${s.count} items in the stack`);
s.pop();
s.peek();
console.log(`There are ${s.count} items in the stack`);
s.pop();
s.pop();