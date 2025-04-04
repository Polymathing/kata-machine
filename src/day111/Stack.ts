type Node<T> = {
<<<<<<< HEAD
    value: T,
    prev?: Node<T>
}


export default class Stack<T> {
    public length: number;
    private tail?: Node<T>;
=======
    value : T,
    prev? : Node<T>
}

export default class Stack<T> {
    public length: number;
    private tail?: Node<T>;

>>>>>>> e60797dc02815eafafb852d813c45d9858591022
    
    constructor() {
        this.length = 0;
        this.tail = undefined;
    }

    push(item: T): void {
        this.length++;
<<<<<<< HEAD
        const node: Node<T> = { value: item };
=======
        const node: Node<T> = { value : item };
>>>>>>> e60797dc02815eafafb852d813c45d9858591022

        if (!this.tail) {
            this.tail = node;
            return;
        }

        node.prev = this.tail;
        this.tail = node;
<<<<<<< HEAD
        return;
=======
>>>>>>> e60797dc02815eafafb852d813c45d9858591022
    }
    
    pop(): T | undefined {
        if (!this.tail) {
            return undefined;
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