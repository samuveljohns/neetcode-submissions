class MinStack {
        stack;
    constructor() {
        this.stack = [];
    }
    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        const cleanNumbers = this.stack.filter(Number.isFinite);

// 2. Find the minimum
return Math.min(...cleanNumbers);
    }
}
