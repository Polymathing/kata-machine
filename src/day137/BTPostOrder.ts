export default function post_order_search(head: BinaryNode<number>): number[] {
    return traverse(head, []);
}

function traverse(head: BinaryNode<number> | null, path: number[]): number[] {
    if (!head) {
        return path;
    }

    traverse(head.left, path);
    traverse(head.right, path);
    path.push(head.value);
    return path;
}