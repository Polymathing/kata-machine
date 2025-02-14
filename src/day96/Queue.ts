type Node<T> = {
    value: T,
    next?: Node<T>;
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    
    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        const node = { value : item };
        this.length++;
        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }
    
    deque(): T | undefined {
        if (!this.tail) {
            return undefined;
        }

        this.length--;
        if (!this.length) {
            this.tail = undefined;
        }

        const head = this.head;
        this.head = head?.next;
        return head?.value;
    }
    
    peek(): T | undefined {
        return this.head?.value;
    }
    
}