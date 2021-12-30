class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}
  
// Initial attempt:
// function validateBst(tree) {
//     let returnVal = true
    
//     function checkTree(node, min = -Infinity, max = Infinity){
//         if(!node) return
//         let currentVal = node.value
//         if(currentVal < min || currentVal > max) returnVal = false
//         checkTree(node.left, min, currentVal - 1)
//         checkTree(node.right, currentVal, max)
//     }
//     checkTree(tree) 
//     return returnVal
// }

// refurbed attempt. Returns values instead of tracking a placeholder value.
// This has the benefit of exiting loop and not continuing on a false. 
// If it makes it to a null node, that entire leg can return true

function validateBst(tree) {
	
	function checkTree(node, min = -Infinity, max = Infinity){
		if(!node) return true
		if(node.value < min || node.value > max) return false
		const leftValid = checkTree(node.left, min, node.value - 1)
		const rightValid = checkTree(node.right, node.value, max)
		return leftValid && rightValid
	}
	
	return checkTree(tree)
}


let tree = new BST(10)
tree.left = new BST(5)
tree.left.left = new BST(2)
tree.left.right = new BST(5)
tree.left.left.left = new BST(1)
tree.right = new BST(15)
tree.right.left = new BST(13)
tree.right.left.right = new BST(14)
tree.right.right = new BST(22)


console.log(validateBst(tree))