export default function pre_order_search(head: BinaryNode<number>): number[] {
    return traverse(head, []);
}

function traverse(head: BinaryNode<number> | null, path: number[]): number[] {
    if (!head) {
        return path;
    }

    path.push(head.value);
    traverse(head.left, path);
    traverse(head.right, path)
    return path;
}