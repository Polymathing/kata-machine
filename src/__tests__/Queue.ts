import Queue from "day95/Queue";

test("queue", function () {
    let list = new Queue<number>();

    list.enqueue(5);
    list.enqueue(7);
    list.enqueue(9);

    expect(list.deque()).toEqual(5);
    expect(list.length).toEqual(2);

    // this must be wrong..?
    debugger;

    // i hate using debuggers
    list.enqueue(11);
    debugger;
    expect(list.deque()).toEqual(7);
    expect(list.deque()).toEqual(9);
    expect(list.peek()).toEqual(11);
    expect(list.deque()).toEqual(11);
    expect(list.deque()).toEqual(undefined);
    expect(list.length).toEqual(0);

    // just wanted to make sure that I could not blow up myself when i remove
    // everything
    list.enqueue(69);
    expect(list.peek()).toEqual(69);
    expect(list.length).toEqual(1);

    // Ensure order is right

    list = new Queue<number>();

    list.enqueue(5);
    list.enqueue(7);
    list.enqueue(9);

    expect(list.peek()).toEqual(5);
    expect(list.deque()).toEqual(5);
    expect(list.peek()).toEqual(7);
    expect(list.deque()).toEqual(7);
    expect(list.peek()).toEqual(9);
    expect(list.deque()).toEqual(9);
    expect(list.peek()).toBeUndefined();

    list.enqueue(11);

    expect(list.peek()).toEqual(11);
    expect(list.deque()).toEqual(11);
    expect(list.peek()).toBeUndefined();

    list.enqueue(69);
    expect(list.peek()).toEqual(69);
    expect(list.length).toEqual(1);
    expect(list.deque()).toEqual(69);
    expect(list.peek()).toBeUndefined();
    expect(list.length).toEqual(0);
});