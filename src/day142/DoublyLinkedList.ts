type Node<T> = {
    value: T,
    prev?: Node<T>,
    next?: Node<T>
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
        if (idx === 0) {
            this.prepend(item);
            return;
        }        

        const curr = this.getAt(idx);

        if (idx === this.length || !curr) {
            this.append(item);
            return;
        }

        const node: Node<T> = { value : item };

        if (curr.next) {
            node.next = curr.next;
            curr.next.prev = node;
            curr.next = node;
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
            const out = this.head;
            this.head = this.tail = undefined;
            return out?.value;
        }

        if (curr === this.head) {
            this.head = this.head.next;
        }

        if (curr === this.tail) {
            this.tail = this.tail.prev;
        }

        if (curr.next) {
            curr.next.prev = curr.prev;
        }

        if (curr.prev) {
            curr.prev.next = curr.next;
        }

        curr.prev = curr.next = undefined;
        return curr.value;
    }
    
    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }
    
    removeAt(idx: number): T | undefined {
        const outGoing = this.getAt(idx);

        if (!outGoing) {
            return undefined;
        }

        return this.remove(outGoing.value);
    }
 
    private getAt(idx: number): Node<T> | undefined {
        if (idx < 0 || idx > this.length) {
            throw new Error('out of bounds');
        }

        let curr = this.head;

        for(let i = 0; curr && i < idx; ++i) {
            curr = curr.next;
        }

        return curr;
    }
}