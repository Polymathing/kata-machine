type Node<T> = {
<<<<<<< HEAD
    value : T,
=======
    value: T,
>>>>>>> e60797dc02815eafafb852d813c45d9858591022
    next?: Node<T>,
    prev?: Node<T>
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
<<<<<<< HEAD
    private tail?: Node<T>
=======
    private tail?: Node<T>;

>>>>>>> e60797dc02815eafafb852d813c45d9858591022
    
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
<<<<<<< HEAD
        this.head.prev = this.head;
=======
        this.head.prev = node;
>>>>>>> e60797dc02815eafafb852d813c45d9858591022
        this.head = node;
    }
    
    insertAt(item: T, idx: number): void {
<<<<<<< HEAD
=======
        const curr = this.getAt(idx);

        if (!curr) {
            return undefined;
        }

>>>>>>> e60797dc02815eafafb852d813c45d9858591022
        if (idx === 0) {
            this.prepend(item);
            return;
        }

        if (idx === this.length) {
            this.append(item);
            return;
        }

<<<<<<< HEAD
        this.length++;

        const node: Node<T> = { value : item };
        const curr = this.getAt(idx);

        if (curr?.next) {
=======
        const node: Node<T> = { value : item };

        if (curr.next) {
>>>>>>> e60797dc02815eafafb852d813c45d9858591022
            curr.next.prev = node;
            node.next = curr.next;
            curr.next = node;
        }

        node.prev = curr;
    }
    
    append(item: T): void {
        this.length++;
<<<<<<< HEAD
        const node : Node<T> = { value : item };
=======
        const node: Node<T> = { value : item };
>>>>>>> e60797dc02815eafafb852d813c45d9858591022

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

<<<<<<< HEAD
        if (curr === this.head) {
            this.head = this.head.next;
        }

        if (curr === this.tail) {
            this.tail = this.tail.prev;
=======
        if (!this.length) {
            const out = this.head;
            this.head = this.tail = undefined;
            return out?.value;
        }

        if (curr === this.head) {
            this.head = this.head?.next;
        }

        if (curr === this.tail) {
            this.tail = this.tail.next;
>>>>>>> e60797dc02815eafafb852d813c45d9858591022
        }

        if (curr.next) {
            curr.next.prev = curr.prev;
        }

        if (curr.prev) {
            curr.prev.next = curr.next;
        }

<<<<<<< HEAD
        curr.prev = curr.next = undefined;
=======
        curr.next = curr.prev = undefined;

>>>>>>> e60797dc02815eafafb852d813c45d9858591022
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
<<<<<<< HEAD

    private getAt(idx: number): Node<T> | undefined {
        if (idx < 0 || idx > this.length) {
=======
 
    private getAt(idx: number): Node<T> | undefined {
        if (idx > this.length || idx < 0) {
>>>>>>> e60797dc02815eafafb852d813c45d9858591022
            throw new Error('out of bounds');
        }

        let curr = this.head;

        for(let i = 0; curr && i < idx; ++i) {
            curr = curr.next;
        }

        return curr;
    }
<<<<<<< HEAD
    
}
=======
}
>>>>>>> e60797dc02815eafafb852d813c45d9858591022
