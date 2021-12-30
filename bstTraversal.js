class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}

function inOrderTraverse(tree, array) {
	if(!tree) return array
	inOrderTraverse(tree.left, array)
	array.push(tree.value)
	inOrderTraverse(tree.right, array)

	return array
}

function preOrderTraverse(tree, array) {
	if(!tree) return array
	array.push(tree.value)
	preOrderTraverse(tree.left, array)
	preOrderTraverse(tree.right, array)
	
	return array
	
}

function postOrderTraverse(tree, array) {
	if(!tree) return array
	postOrderTraverse(tree.left, array)
	postOrderTraverse(tree.right, array)
	array.push(tree.value)
	
	return array
}

let tree = new BST(10)
tree.left = new BST(5)
tree.left.left = new BST(2)
tree.left.right = new BST(5)
tree.left.left.left = new BST(1)
tree.right = new BST(15)
tree.right.right = new BST(22)

console.log(inOrderTraverse(tree, []))
console.log(preOrderTraverse(tree, []))
console.log(postOrderTraverse(tree, []))