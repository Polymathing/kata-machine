type Node<T> = {
    value: T,
    next?: Node<T>,
    prev?: Node<T>
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    
    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        this.length++;
        const node: Node<T> = { value : item };

        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        this.head.prev = node;
        node.next = this.head;
        this.head = node;
    }
    
    insertAt(item: T, idx: number): void {
        if (idx === 0) {
            this.prepend(item);
        }

        if (idx === this.length) {
            this.append(item);
        }

        const node: Node<T> = { value : item };
        const curr = this.getAt(idx);

        if (curr?.next) {
            curr.next.prev = node;
            node.next = curr.next;
        }

        node.prev = curr;
    }
    
    append(item: T): void {
        this.length++;
        const node: Node<T> = { value : item };

        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }
    
    remove(item: T): T | undefined {
        let curr = this.head;

        for(let i = 0; i < this.length && curr; ++i) {
            if (curr.value === item) {
                break;
            }

            curr = curr.next;
        }

        if (!curr) {
            return undefined;
        }

        this.length--;

        if (!this.length) {
            const out = this.head;
            this.head = this.tail = undefined;
            return out?.value;
        }

        if (curr === this.head) {
            this.head = this.head.next;
        }

        if (curr.next) {
            curr.next.prev = curr.prev;
        }

        if (curr.prev) {
            curr.prev.next = curr.next;
        }

        curr.next = curr.prev = undefined;
        return curr.value;
    }
    
    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }
    
    removeAt(idx: number): T | undefined {
        const out = this.getAt(idx);

        if (!out) {
            return undefined;
        }

        return this.remove(out.value);
    }

    private getAt(idx: number): Node<T> | undefined {
        if (idx < 0 || idx > this.length) {
            throw new Error('out of bounds');
        }
        
        let curr = this.head;

        for(let i = 0; i < idx && curr; ++i) {
            curr = curr.next;
        }

        return curr;
    }
    
}