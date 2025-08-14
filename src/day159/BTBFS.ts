export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  const queue: (BinaryNode<number> | null)[] = [head];

  while(queue.length) {
    const node = queue.shift();

    if (!node) {
      continue;
    }

    if (node.value === needle) {
      return true;
    }

    queue.push(node.right);
    queue.push(node.left);
  }

  return false;
}