// Refurbed. Doesn't waste space with variables for each tree, just one half at a time

function invertBinaryTree(tree) {
	if(!tree) return null
	const left = tree.left
	tree.left = invertBinaryTree(tree.right)
	tree.right = invertBinaryTree(left)

	return tree
}


// Initial attempt. 
// function invertBinaryTree(tree) {
// 	let leftTree = tree.left ? invertBinaryTree(tree.left) : null
// 	let rightTree = tree.right ? invertBinaryTree(tree.right) : null

// 	tree.left = rightTree
// 	tree.right = leftTree
	
// 	return tree
// }

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let tree = new BinaryTree(1)
tree.left = new BinaryTree(2)
tree.left.left = new BinaryTree(4)
tree.left.right = new BinaryTree(5)
tree.left.left.left = new BinaryTree(8)
tree.left.left.right = new BinaryTree(9)
tree.right = new BinaryTree(3)
tree.right.right = new BinaryTree(7)
tree.right.left = new BinaryTree(6)


console.log(invertBinaryTree(tree))