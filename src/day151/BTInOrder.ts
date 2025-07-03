export default function in_order_search(head: BinaryNode<number>): number[] {
  return traverse(head, []);
}

function traverse(head: BinaryNode<number> | null, path: number[]): number[] {
  if (!head) {
    return path;
  }

  traverse(head.left, path);
  path.push(head.value);
  traverse(head.right, path);
  return path;
}