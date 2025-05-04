type MyBinaryNode<T> = {
    value: T,
    left: MyBinaryNode<T> | null,
    right: MyBinaryNode<T> | null
}

export default function in_order_search(head: MyBinaryNode<number>): number[] {
    return traverse(head, []);
}

function traverse(curr: MyBinaryNode<number> | null, path: number[]): number[] {
    if (!curr) {
        return path;
    }

    traverse(curr.left, path);
    path.push(curr.value);
    traverse(curr.right, path);

    return path;
}