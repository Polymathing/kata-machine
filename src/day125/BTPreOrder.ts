function traverse(curr: BinaryNode<number> | null, path: number[]) {
    // base case
    if (!curr) {
        return path;
    }

    // pre recursion
    path.push(curr.value);

    // recursion
    traverse(curr.left, path);
    traverse(curr.right, path);

    // => post recursion
    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return traverse(head, []);
}