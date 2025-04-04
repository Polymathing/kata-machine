type Node<T> = {
    value: T,
    next?: Node<T>
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
        this.length++;
        const node: Node<T> = { value : item };

        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }
    
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }
<<<<<<< HEAD

        this.length--;
        if (!this.length) {
            this.tail = undefined;
        } 

        const head = this.head;
=======
        
        this.length--;
        if (!this.length) {
            this.tail = undefined;
        }

        const head = this.head; 
>>>>>>> e60797dc02815eafafb852d813c45d9858591022
        this.head = head.next;
        return head.value;
    }
    
    peek(): T | undefined {
        return this.head?.value;
<<<<<<< HEAD
    }   
=======
    }
>>>>>>> e60797dc02815eafafb852d813c45d9858591022
    
}