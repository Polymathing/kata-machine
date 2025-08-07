export default function bfs(head: BinaryNode<number>, needle: number): boolean {
 const queue: (BinaryNode<number> | null)[] = [head];

 while(queue.length) {
  const node = queue.shift();

  if (node?.value === needle) {
    return true;
  }

  if (!node) {
    continue;
  }

  queue.push(node.left);
  queue.push(node.right)

}

  return false;

}