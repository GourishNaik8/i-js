// function stack in es6 format

export default class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    top() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

//export stack class as module to use in another file
