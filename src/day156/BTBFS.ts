export default function bfs(head: BinaryNode<number>, needle: number): boolean {

  const queue: (BinaryNode<number> | null | undefined)[] = [head];

  while(queue.length) {
    const node: BinaryNode<number> | null | undefined = queue.shift();

    if (!node) {
      continue;
    }

    if (node.value === needle) {
      return true;
    } 

    queue.push(node.left);
    queue.push(node.right);
  }

  return false;
}