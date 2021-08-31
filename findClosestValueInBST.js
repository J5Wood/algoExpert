function findClosestValueInBst(tree, target) {
	let currentNode = tree
	let closestVal = Infinity
	let returnNode = currentNode;
	
	let checkNode = currentNode => {
		if(Math.abs(target - currentNode.value) < closestVal){
			closestVal = Math.abs(target - currentNode.value)
			returnNode = currentNode
		}
		if(target < currentNode.value && currentNode.left){
			checkNode(currentNode.left)
		} else if (target > currentNode.value && currentNode.right){
			checkNode(currentNode.right)
		}
	}
	
	checkNode(currentNode)
	return returnNode.value;
}