function nodeDepths(root) {
	let sumOfDepths = 0;
	
	function addDepths(node, currentDepth = 0){
		sumOfDepths += currentDepth;
		if(node.left) addDepths(node.left, currentDepth + 1);
		if(node.right) addDepths(node.right, currentDepth + 1);
	}
	addDepths(root)
	return sumOfDepths;
}