type Node<T> = {
    value: T,
    next?: Node<T>
}

export default class Queue<T> {
    public length: number;
    #head?: Node<T>;
    #tail?: Node<T>;

    constructor() {
        this.#head = this.#tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        this.length++;
        const node = { value: item };

        if (!this.#tail) {
            this.#head = this.#tail = node;
            return;
        } 

        this.#tail = this.#tail.next = node;
    }

    deque(): T | undefined {
        if (!this.length) {
            return undefined;
        }

        this.length--;

        if (!this.length) {
            this.#tail = undefined;
        }

        const head = this.#head;
        this.#head = head?.next;
        return head?.value;
    }

    peek(): T | undefined {
        return this.#head?.value;
    }
}