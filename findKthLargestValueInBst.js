class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}

function findKthLargestValueInBst(tree, k) {
    const sortedArr = []
    let i = k - 1
    
    function traverseTree(node){
        if(!node || sortedArr[i]) return
        traverseTree(node.right)
        sortedArr.push(node.value)
        if(sortedArr[i]) return
        traverseTree(node.left)
    }

    traverseTree(tree)
    if(!sortedArr[i]) sortedArr[i] = -1
    return sortedArr[i]
}

let tree = new BST(15)
tree.left = new BST(5)
tree.left.left = new BST(2)
tree.left.left.left = new BST(1)
tree.left.left.right = new BST(3)
tree.left.right = new BST(5)
tree.right = new BST(20)
tree.right.right = new BST(22)
tree.right.left = new BST(17)

console.log(findKthLargestValueInBst(tree, 3))