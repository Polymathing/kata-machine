
type Node<T> = {
    value: T,
    next?: Node<T>,
    previous?: Node<T>,
}

export default class Queue<T> {
    public length: number;
    #head?: Node<T>;
    #tail?: Node<T>;
    
    constructor() {
       this.length = 0;
       this.#head = this.#tail = undefined;
    }

    enqueue(item: T): void {
      ++this.length;
      const node = { value: item };
      if (!this.#tail) {
        this.#head = this.#tail = node;
        return;
      }

      this.#tail.next = node;
      this.#tail = node;
    }

    deque(): T | undefined {
      if (!this.#head) {
        return undefined;
      }

      --this.length;
      const head = this.#head;
      this.#head = this.#head.next;

      if (!this.length) {
        this.#tail = undefined;
      }
      
      return head.value;
    }

    peek(): T | undefined {
        return this.#head?.value;
    }
}