type Node<T> = {
    value : T,
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

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
    
    insertAt(item: T, idx: number): void {
       const curr = this.getAt(idx);

        const node: Node<T> = { value : item };

        if (!curr) {
            this.prepend(node.value);
            return;
        }

        if (curr === this.tail) {
            this.append(node.value);
            return;
        }

        this.length++;

        if (curr?.next) {
            node.next = curr.next;
            node.prev = curr.next.prev;
            curr.next.prev = node;
        }

        curr.next = node;
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

        for(let i = 0; curr && i < this.length; ++i) {
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
            const outgoingValue = this.head?.value;
            this.head = this.tail = undefined;
            return outgoingValue;
        }

        if (curr.next) {
            curr.next.prev = curr.prev;
        }

        if (curr.prev) {
            curr.prev.next = curr.next;
        }

        if (curr === this.head) {
            this.head = curr.next;
        }

        if (curr === this.tail) {
            this.tail = curr.prev;
        }

        curr.next = curr.prev = undefined;
        return curr.value;
    }
    
    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }
    
    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx);
        if (!node) {
            return undefined;
        }

        return this.remove(node.value);
    }

    private getAt(idx: number): Node<T> | undefined {
        if (idx > this.length || idx < 0) {
            throw new Error('out of bounds');
        }

        let node = this.head;

        for(let i = 0; node && i < idx; ++i) {
            node = node.next;
        }

        return node;
    }
    
}