import TreeNode from "./TreeNode";
import Queue from "./Queue";

function breadthFirstSearch<T>(
  tree: TreeNode<T>,
  target: T
): TreeNode<T> | null {
  const queue = new Queue<TreeNode<T>>();
  queue.enqueue(tree);

  while (0 < queue.size()) {
    const node: TreeNode<T> | undefined = queue.dequeue();
    if (node!.value === target) return node!;
    if (node!.left) queue.enqueue(node!.left);
    if (node!.right) queue.enqueue(node!.right);
  }

  return null;
}

describe("breadthFirstSearch", () => {
  const root = new TreeNode(3);
  root.left = new TreeNode(8);
  root.right = new TreeNode(12);
  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(6);
  root.right.left = new TreeNode(9);
  root.right.right = new TreeNode(2);
  root.left.left.left = new TreeNode(16);
  root.left.left.right = new TreeNode(5);
  root.left.right.left = new TreeNode(7);
  root.left.right.right = new TreeNode(10);
  root.right.left.left = new TreeNode(19);
  root.right.left.right = new TreeNode(20);
  root.right.right.left = new TreeNode(11);
  root.right.right.right = new TreeNode(4);

  test("#1", () => {
    expect(breadthFirstSearch(root, 9)).toBe(root!.right!.left);
  });

  test("#2", () => {
    expect(breadthFirstSearch(root, 3)).toBe(root);
  });

  test("#3", () => {
    expect(breadthFirstSearch(root, 4)).toBe(root!.right!.right!.right);
  });

  test("#4", () => {
    expect(breadthFirstSearch(root, 54)).toBeNull;
  });
});
