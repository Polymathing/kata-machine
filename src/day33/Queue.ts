type Node<T> = {
    value: T,
    next?: Node<T>,
    previous?: Node<T>;
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;
    

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {

        ++this.length;
        const node = { value: item };

        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }

        this.tail = this.tail.next = node;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        --this.length;
        const head = this.head;
        this.head = this.head.next;

        if (!this.length) {
            this.tail = undefined;
        }

        return head.value;
    }
    
    peek(): T | undefined {
        return this.head?.value;
    }
}