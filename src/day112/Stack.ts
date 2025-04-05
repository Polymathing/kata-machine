type Node<T> = {
    value: T,
    prev?: Node<T>
}

export default class Stack<T> {
    public length: number;
    private tail?: Node<T>;
    
    constructor() {
        this.length = 0;
        this.tail = undefined;
    }

    push(item: T): void {
        this.length++;
        const node: Node<T> = { value : item };

        if (!this.tail) {
            this.tail = node;
            return;
        }

        node.prev = this.tail;
        this.tail = node;
    }
    
    pop(): T | undefined {
        if (!this.tail) {
            return this.tail;
        }

        this.length--;
        const tail = this.tail;
        this.tail = tail.prev;
        return tail.value;
    }
    
    peek(): T | undefined {
        return this.tail?.value;
    }
    
}