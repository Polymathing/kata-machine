export function test_list(list: List<number>): void {
    list.append(5);
    list.append(7);
    list.append(9);

    expect(list.get(2)).toEqual(9);
    expect(list.removeAt(1)).toEqual(7);
    expect(list.length).toEqual(2);

    list.append(11);
    expect(list.removeAt(1)).toEqual(9);
    expect(list.remove(9)).toEqual(undefined);
    expect(list.removeAt(0)).toEqual(5);
    expect(list.removeAt(0)).toEqual(11);
    expect(list.length).toEqual(0);

    list.prepend(5);
    list.prepend(7);
    list.prepend(9);

    expect(list.get(2)).toEqual(5);
    expect(list.get(0)).toEqual(9);
    expect(list.remove(9)).toEqual(9);
    expect(list.length).toEqual(2);
    expect(list.get(0)).toEqual(7);

    expect(list.get(0)).toEqual(7);

    while (list.length > 0) {
        list.removeAt(0);
    }

    expect(list.get(0)).toEqual(undefined);
    expect(list.removeAt(0)).toEqual(undefined);
    expect(list.remove(10)).toEqual(undefined);

    expect(() => list.removeAt(-1)).toThrowError();

    for (let i = 0; i < 100; i++) {
        list.append(i);
    }
    
    expect(list.length).toEqual(100);
    expect(list.get(99)).toEqual(99);

    expect(list.remove(102)).toEqual(undefined);

    list.append(7);
    expect(list.remove(7)).toEqual(7);
    expect(list.remove(7)).toEqual(7);

    expect(list.get(0)).toEqual(0);
    expect(list.get(99)).toEqual(undefined); 

    while (list.length > 0) {
        list.removeAt(0);
    }
    expect(list.length).toEqual(0);
    expect(list.get(0)).toEqual(undefined);
}
